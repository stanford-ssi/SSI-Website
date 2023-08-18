import {
  BlogPage,
  BlogPageProps,
  ROOT_NOTION_PAGE_ID
} from 'client/components/blogPage';
import { GetStaticProps } from 'next';
import notion from 'server/notion';

export default function Page(props: BlogPageProps) {
  return <BlogPage {...props} />;
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const page = await notion.getPage(ROOT_NOTION_PAGE_ID);

  return {
    props: {
      recordMap: page,
      revalidate: 10
    }
  };
};
