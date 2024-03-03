import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import CartItem from "./CartItem";

export default function Cart({ onClose, totPrice, onForm }) {
  const { cartCtx } = useContext(OrderContext);

  // alphabetic sorted x name
  const sortedCartMeals = cartCtx.sort((a, b) => a.name.localeCompare(b.name));
  // console.log(sortedCartMeals);

  return (
    <div id="cart">
      <h2>Your Cart</h2>
      {/* ordering meals list */}
      <ul id="cart-list">
        {sortedCartMeals.map((meal) => (
          <CartItem key={meal.name} meal={meal} />
        ))}
      </ul>

      <div className="totPrice">${totPrice}</div>

      <div className="cart-buttons">
        <Button onClick={() => onClose()} text="Close" />
        {cartCtx.length > 0 && (
          <Button
            onClick={() => onForm(true)}
            text="Go to Checkout"
            btnStyle="btn-bg"
          />
        )}
      </div>
    </div>
  );
}
