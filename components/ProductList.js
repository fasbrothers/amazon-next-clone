import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectAllProducts } from "../reducer/basketSlice";
import Product from "./Product";
// import classes from "../styles/Product.module.scss";

function ProductList({ products }) {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(selectAllProducts.addToAllProduct(products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="d-flex flex-fill flex-wrap justify-content-start mx-5">
      {products.map((product) => (
        <div key={product.id}>
          <Product
            title={product.title}
            image={product.image}
            price={product.price}
            category={product.category}
            id={product.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
