import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import { useContext } from "react";

export default function FoodCard({ img, name, price, description, meal }) {
  const { addToCartCtx } = useContext(OrderContext);
  return (
    <li className="food-card">
      <img src={`../../../backend/public/${img}`} alt="" />
      <div className="food-info">
        <h3>{name}</h3>
        <div className="price">
          <span>{price}$</span>
        </div>
        <p>{description}</p>
        <Button
          // onClick={addToCartCtx(meal)}
          text="Add to Cart"
          btnStyle="btn-bg"
        />
      </div>
    </li>
  );
}
