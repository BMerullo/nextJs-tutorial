import Head from "next/head";
import { useRouter } from "next/router";

const Blog = ({ title, description }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: { title: "Article Title", description: "Article description" },
  };
}
