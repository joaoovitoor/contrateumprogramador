import Document, { Html, Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = "G-4FGQJD8B0B"; // Substitua pelo seu código de acompanhamento
const ADS_TAG = "AW-11109257615"; // Substitua pelo seu código de acompanhamento

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="pt-br">
          <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />

            {/* Global Site Tag (gtag.js) - Google ads */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ADS_TAG}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ADS_TAG}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
