import type { AppProps } from "next/app";
import Providers from "src/provider";
import "@styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;
