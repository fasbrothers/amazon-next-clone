/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useSelector } from "react-redux";
import CheckoutList from "../components/CheckoutList";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../reducer/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div>
      <Head>
        <title>Checkout Page</title>
      </Head>
      <Header />
      <div className="d-flex flex-fill flex-wrap justify-content-start mx-5">
        {items.map((product) => (
          <div key={product.id}>
            <CheckoutList
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          </div>
        ))}
      </div>
      <p className="fs-3 font-bold text-warning mx-5 my-2">
        Total items {items.length}: ${Math.round(total)}
      </p>
    </div>
  );
}

export default checkout;
