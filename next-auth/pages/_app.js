import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../components/Navbar.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
