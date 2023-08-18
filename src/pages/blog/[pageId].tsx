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
  const page = await notion.getPage(String(context.params?.pageId));

  return {
    props: {
      recordMap: page,
      revalidate: 10
    }
  };
};
