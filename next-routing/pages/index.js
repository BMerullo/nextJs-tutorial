import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
      <Link href="/product">
        <p>Products</p>
      </Link>
    </div>
  );
};

export default Home;
