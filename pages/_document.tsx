import Document, { Head, Html, Main, NextScript, type DocumentContext, type DocumentInitialProps } from "next/document";
import { DEFAULT_LANGUAGE, normalizeLanguage } from "../src/i18n";

type MyDocumentProps = DocumentInitialProps & {
  lang: string;
};

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const pathname = ctx.asPath?.split("?")[0] ?? "/";
    const firstSegment = pathname.split("/").filter(Boolean)[0] ?? DEFAULT_LANGUAGE;

    return {
      ...initialProps,
      lang: normalizeLanguage(firstSegment),
    };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta name="google-site-verification" content="zQAA07sVtGlHQm8n_vbIjVnihOALnXwQ9CtRQnNEmWg" />
          <link rel="dns-prefetch" href="//cdn.iubenda.com" />
          <link rel="dns-prefetch" href="//idb.iubenda.com" />
          <link rel="preconnect" href="https://cdn.iubenda.com" crossOrigin="" />
          <link rel="preconnect" href="https://idb.iubenda.com" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
