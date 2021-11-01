import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Rick&Morty Encyclopedia" />
          <meta
            name="apple-mobile-web-app-title"
            content="Rick&Morty Encyclopedia"
          />
          <meta name="msapplication-navbutton-color" content="#61ff18" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          <link rel="icon" sizes="512x512" href="icon-512x512.png" />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="icon-512x512.png"
          />
          <link rel="icon" sizes="384x384" href="icon-384x384.png" />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="icon-384x384.png"
          />
          <link rel="icon" sizes="256x256" href="icon-256x256.png" />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="icon-256x256.png"
          />
          <link rel="icon" sizes="192x192" href="icon-192x192.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
