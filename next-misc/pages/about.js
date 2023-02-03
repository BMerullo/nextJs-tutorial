import React from "react";
import Footer from "../components/layout/Footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
