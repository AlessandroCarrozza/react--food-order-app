import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";

export default function Cart({ onClose }) {
  const { cartCtx, addToCartCtx, setCartCtx } = useContext(OrderContext);
  // const totPrice = cartCtx.reduce((acc, obj) => acc + obj.price, 0);
  function removeFromCart(meal) {
    setCartCtx((prevMeals) => {
      const updatedMeals = prevMeals.filter(
        (prevMeal) => prevMeal.name !== meal.name
      );
      return { ...updatedMeals };
    });
  }
  return (
    <div id="cart">
      <h2>Your Cart</h2>
      {/* ordering meals list */}
      <ul id="cart-list">
        {cartCtx.map((meal) => (
          <li className="cart-row" key={meal.name}>
            <span>
              {meal.name} - {meal.quantity} x ${+meal.price.toFixed(2)}
            </span>
            <div className="plus-minus">
              <Button text={<div>+</div>} onClick={() => addToCartCtx(meal)} />
              <span>{meal.quantity}</span>
              <Button
                text={<div>-</div>}
                onClick={() => removeFromCart(meal)}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="totPrice">${totPrice.toFixed(2)}</div> */}

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
