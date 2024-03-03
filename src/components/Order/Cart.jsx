import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import { filterMeals } from "../../util/functions";

export default function Cart({ onClose }) {
  const { cartCtx, addToCartCtx, setCartCtx, availableMealsCtx } =
    useContext(OrderContext);
  const totPrice = cartCtx.reduce((acc, obj) => acc + obj.price, 0);

  // remove meal function
  function removeFromCart(meal) {
    setCartCtx((prevMeals) => {
      let updatedMeals = [];
      if (meal.quantity === 1) {
        // filter meals
        updatedMeals = filterMeals(prevMeals, meal);
      } else {
        // filter meals and reducing 1 from quantity
        const { name, price, quantity } = meal;
        const filteredMeals = filterMeals(prevMeals, meal);
        const foundMeal = availableMealsCtx.find(
          (singleMeal) => singleMeal.name === name
        );
        updatedMeals = [
          ...filteredMeals,
          {
            name: name,
            price: +(price - foundMeal.price),
            quantity: +(quantity - 1),
          },
        ];
      }
      return [...updatedMeals];
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
