import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBasktet, removeFromBasket } from "../reducer/basketSlice";

function CheckoutList({ image, title, price, category, id }) {
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
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div>
      <div
        className="border-bottom d-flex flex-column align-items-center justify-content-start mx-2 container"
        style={{ width: "18rem", marginTop: 120, minHeight: 520 }}
      >
        <Image src={image} alt="information" width="150" height="200" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="text-warning">${price}</p>
          <h6 className="text-secondary m-0 p-0">{category}</h6>
        </div>
        <div className="card-body text-start">
          <button
            onClick={addItemToBasket}
            className="btn btn-warning m1-2 mx-1 btn-sm"
          >
            Add basket
          </button>
          <button
            onClick={removeItemFromBasket}
            className="btn btn-warning mx-2 btn-sm"
          >
            Remove basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutList;
