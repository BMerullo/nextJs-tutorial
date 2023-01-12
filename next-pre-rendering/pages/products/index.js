import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <h2>
                {product.id} {product.title} {product.price}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
}
