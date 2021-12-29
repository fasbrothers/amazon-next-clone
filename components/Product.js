import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasktet } from "../reducer/basketSlice";
import Link from "next/link";

function Product({ title, image, price, category, id }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      title,
      image,
      price,
      category,
    };
    dispatch(addToBasktet(product));
  };
  return (
    <div>
      <div
        className=" product border-bottom d-flex flex-column align-items-center justify-content-start mx-2 container"
        style={{ width: "18rem", marginTop: 120, minHeight: 520 }}
      >
        <Image src={image} alt="information" width="150" height="200" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="text-warning">${price}</p>
          <h6 className="text-secondary m-0 p-0">{category}</h6>
        </div>
        <div className="card-body text-start">
          <button onClick={addItemToBasket} className="btn btn-warning btn-sm">
            Add to basket
          </button>
          <Link href={"/product/[id]"} as={`/product/${id}`}>
            <button className="btn btn-warning mx-2 btn-sm">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
