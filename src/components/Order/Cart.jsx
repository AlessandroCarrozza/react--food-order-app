import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";

export default function Cart({ onClose }) {
  const { cartCtx, addToCartCtx } = useContext(OrderContext);
  return (
    <div id="cart">
      <h2>Your Cart</h2>
      <ul id="cart-list">
        {cartCtx.map((meal) => (
          <li className="cart-row" key={meal.name}>
            <span>
              {meal.name}-{meal.quantity}-${+meal.price.toFixed(2)}
            </span>
            <div className="plus-minus">
              <Button text="+" onClick={() => addToCartCtx(meal)} />
              <span>{meal.quantity}</span>
              <Button text="-" />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Button text="Close" onClick={() => onClose()} />
        <Button
          text="Go to Checkout"
          btnStyle="btn-bg"
          onClick={() => onClose()}
        />
      </div>
    </div>
  );
}
