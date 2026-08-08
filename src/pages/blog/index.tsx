import {
  BlogPage,
  BlogPageProps,
  ROOT_NOTION_PAGE_ID
} from 'client/components/blogPage';
import { GetStaticProps } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import notion from 'server/notion';
import { unwrapBlock } from 'server/notionBlock';

export default function Page(props: BlogPageProps) {
  return <BlogPage {...props} />;
}

// Notion's own collection view order isn't reliably chronological, so
// force newest-first ordering by each post's created_time.
function sortCollectionsByCreatedTimeDesc(recordMap: ExtendedRecordMap) {
  for (const views of Object.values(recordMap.collection_query)) {
    for (const result of Object.values(views)) {
      const groupResults = result.collection_group_results;
      if (!groupResults) continue;

      groupResults.blockIds = [...groupResults.blockIds].sort((a, b) => {
        const createdA = unwrapBlock(recordMap.block[a])?.created_time ?? 0;
        const createdB = unwrapBlock(recordMap.block[b])?.created_time ?? 0;
        return createdB - createdA;
      });
    }
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  try {
    const page = await notion.getPage(ROOT_NOTION_PAGE_ID);
    sortCollectionsByCreatedTimeDesc(page);

    return {
      props: {
        recordMap: page
      },
      revalidate: 10
    };
  } catch (error) {
    // Notion's unofficial API occasionally blocks server/build traffic;
    // don't let a transient failure here fail the whole site's deploy.
    console.error('Failed to fetch Notion blog page', error);

    return {
      props: {},
      revalidate: 10
    };
  }
};
