import { OrderContext } from "../../store/food-order-context";
import { findMeal } from "../../utils/functions";
import Button from "../ui/Button";
import { useContext } from "react";

export default function MealCard({ availableMeal, img }) {
  // context
  const { addToCartCtx, cartCtx } = useContext(OrderContext);

  // check if the selected meal is already in the cart
  const mealFromCart = findMeal(cartCtx, availableMeal.name);

  // if there is not mealFromCart, take the available meal with the same name
  const cartMeal = mealFromCart === undefined ? availableMeal : mealFromCart;
  // console.log(mealFromCart);
  // console.log(availableMeal);
  return (
    <li className="food-card">
      <img src={`../../../backend/public/${img}`} alt={availableMeal.name} />
      <div className="food-info">
        <h3>{availableMeal.name}</h3>
        <div className="price">
          <span>${availableMeal.price}</span>
        </div>
        <p>{availableMeal.description}</p>

        <Button
          onClick={() => addToCartCtx(cartMeal)}
          text="Add to Cart"
          btnStyle="btn-bg"
        />
      </div>
    </li>
  );
}
