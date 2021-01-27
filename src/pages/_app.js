import '../style.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Kirat Tour and Travels - Taxi in Chandigarh | Delhi | Shimla
        </title>
        <meta
          name="description"
          content="We offer Taxi from Chandigarh to Delhi, Shimla, Manali, Amritsar, Jammu at best prices. Book your cab online on Kirat Tour and Travels."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/ico/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/ico/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/ico/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/ico/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
