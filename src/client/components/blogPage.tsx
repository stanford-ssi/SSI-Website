import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import Layout from 'client/components/layout';
import dynamic from 'next/dynamic';
import { Block, ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';

export const ROOT_NOTION_PAGE_ID = 'SSI-Blog-722cf1326728402298c0f83b004faf9e';

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
  readonly recordMap?: ExtendedRecordMap;
  readonly pageId?: string;
}

export function BlogPage({ recordMap, pageId }: BlogPageProps) {
  console.log(recordMap);
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  const pageBlock: Block | undefined = pageId
    ? recordMap.block[pageId].value
    : undefined;

  function formatTimestamp(unixTimestamp: number): string {
    const date = new Date(unixTimestamp);

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const monthName = monthNames[date.getMonth()];

    const day = date.getDate();
    const year = date.getFullYear();

    return `${monthName} ${day}, ${year}`;
  }

  function renderByline() {
    if (!pageBlock) {
      return null;
    }
    const createdOn = formatTimestamp(pageBlock.created_time);
    const updatedOn = formatTimestamp(pageBlock.last_edited_time);
    return (
      <Center>
        <Text marginBottom={8}>
          {createdOn}
          {createdOn !== updatedOn && `. Updated ${updatedOn}.`}
        </Text>
      </Center>
    );
  }

  /**
   * Converts a given URL into a Notion-specific image URL.
   * @param originalUrl - The original URL of the image, typically hosted on S3.
   * @returns The new URL with Notion-specific parameters.
   */
  function convertToNotionImageUrl(originalUrl: string): string {
    if (originalUrl.startsWith('/images')) {
      return `https://stanford-ssi.notion.site${originalUrl}`;
    }

    // Encode the original URL so it can be embedded within another URL
    const encodedUrl = encodeURIComponent(originalUrl);

    // The following parameters seem to be specific to Notion. If you have actual values to replace these,
    // you can modify them here.
    const table = 'block';
    const id = pageId;

    // Construct the new URL
    const newUrl = `https://stanford-ssi.notion.site/image/${encodedUrl}?table=${table}&id=${id}`;
    return newUrl;
  }

  function renderCoverImg() {
    if (!pageBlock?.format?.page_cover) {
      return null;
    }
    return (
      <Image
        src={convertToNotionImageUrl(pageBlock.format.page_cover)}
        alt={'cover photo'}
        maxHeight={'30vh'}
        objectPosition={`50% ${Math.round(
          (1 - pageBlock.format.page_cover_position) * 100
        )}%`}
        fit="cover"
      />
    );
  }

  return (
    <Layout title={title} description="Stanford SSI blog post">
      {renderCoverImg()}
      <Heading textAlign="center" marginTop={10}>
        {title}
      </Heading>
      {renderByline()}
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
      <Box margin={8} />
    </Layout>
  );
}
