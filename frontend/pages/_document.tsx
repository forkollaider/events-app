import {Html, Head, Main, NextScript, DocumentProps} from "next/document";
import {DocumentHeadTags, DocumentHeadTagsProps} from "@mui/material-nextjs/v13-pagesRouter";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
          <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
