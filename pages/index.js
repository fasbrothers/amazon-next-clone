import Head from "next/head";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="amazon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
