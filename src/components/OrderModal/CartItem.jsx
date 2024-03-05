import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import { filterMeals, findMeal } from "../../utils/functions";

export default function CartItem({ meal }) {
  // context
  const { addToCartCtx, setCartCtx, availableMealsCtx } =
    useContext(OrderContext);

  // remove meal function
  function removeFromCart(meal) {
    setCartCtx((prevMeals) => {
      let updatedMeals = [];
      if (meal.quantity <= 1) {
        // filter meals
        updatedMeals = filterMeals(prevMeals, meal);
      } else {
        // filter meals and reducing 1 from quantity
        const { name, price, quantity } = meal;
        const filteredMeals = filterMeals(prevMeals, meal);
        const foundMeal = findMeal(availableMealsCtx, name);
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
    <li className="cart-row">
      <span>
        {meal.name} - {meal.quantity} x ${+meal.price.toFixed(2)}
      </span>
      <div className="plus-minus">
        <Button text={<div>+</div>} onClick={() => addToCartCtx(meal)} />
        <span>{meal.quantity}</span>
        <Button text={<div>-</div>} onClick={() => removeFromCart(meal)} />
      </div>
    </li>
  );
}
