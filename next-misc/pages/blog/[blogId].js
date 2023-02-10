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
      <h1 className="content">
        Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
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
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: { title: "Article Title", description: "Article description" },
  };
}
