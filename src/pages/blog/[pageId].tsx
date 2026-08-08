import { BlogPage, BlogPageProps } from 'client/components/blogPage';
import { GetStaticPaths, GetStaticProps } from 'next';
import notion from 'server/notion';

export default function Page(props: BlogPageProps) {
  return <BlogPage {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context
) => {
  const pageId = String(context.params?.pageId);

  try {
    const page = await notion.getPage(pageId);

    return {
      props: {
        recordMap: page,
        pageId
      },
      revalidate: 10
    };
  } catch (error) {
    // Notion's unofficial API occasionally blocks server/build traffic;
    // fail this single request rather than the whole build/page.
    console.error(`Failed to fetch Notion page ${pageId}`, error);

    return {
      notFound: true,
      revalidate: 10
    };
  }
};
