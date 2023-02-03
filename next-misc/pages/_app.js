import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "/styles/globals.css";
import "/styles/layout.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
