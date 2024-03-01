import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Head>
        <meta name="color-scheme" content="light only"></meta>
      </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
