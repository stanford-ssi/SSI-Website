import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import { Heading } from '@chakra-ui/react';
import Layout from 'client/components/layout';
import dynamic from 'next/dynamic';
import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';

export const ROOT_NOTION_PAGE_ID = '54fba2318ebb48c9b628358945d9a877';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
);

export interface BlogPageProps {
  recordMap?: ExtendedRecordMap;
}

export function BlogPage({ recordMap }: BlogPageProps) {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <Layout title={title} description="Stanford SSI blog post">
      <Heading textAlign="center">{title}</Heading>
      <NotionRenderer
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf
        }}
        darkMode
        rootPageId={ROOT_NOTION_PAGE_ID}
        mapPageUrl={(pageId) => `/blog/${pageId}`}
      />
    </Layout>
  );
}
