/* eslint-disable @next/next/no-title-in-document-head */
// Next.js Custom Document: https://nextjs.org/docs/advanced-features/custom-document
// Next.js Custom Font: https://nextjs.org/docs/messages/no-page-custom-font


import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';


class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Hello world!</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
