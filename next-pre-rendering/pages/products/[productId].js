import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });
  return {
    paths: [{ params: { productId: "1" } }],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product: data,
    },
  };
}
