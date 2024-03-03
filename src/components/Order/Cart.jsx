import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const { cartCtx } = useContext(OrderContext);
  const totPrice = cartCtx.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div id="cart">
      <h2>Your Cart</h2>
      {/* ordering meals list */}
      <ul id="cart-list">
        {cartCtx.map((meal) => (
          <CartItem key={meal.name} meal={meal} />
        ))}
      </ul>

      <div className="totPrice">${totPrice.toFixed(2)}</div>

      <div className="cart-buttons">
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
