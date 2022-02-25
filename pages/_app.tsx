import type { AppProps } from "next/app";
import Providers from "src/provider";
import Head from "next/head";
import "@styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;
