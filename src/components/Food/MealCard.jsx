import { OrderContext } from "../../store/food-order-context";
import { findMeal } from "../../util/functions";
import Button from "../ui/Button";
import { useContext } from "react";

export default function MealCard({ meal, img }) {
  const { addToCartCtx, cartCtx } = useContext(OrderContext);
  const foundMeal = findMeal(cartCtx, meal.name);
  const cartMeal = foundMeal === undefined ? meal : foundMeal;
  return (
    <li className="food-card">
      <img src={`../../../backend/public/${img}`} alt={meal.name} />
      <div className="food-info">
        <h3>{meal.name}</h3>
        <div className="price">
          <span>${meal.price}</span>
        </div>
        <p>{meal.description}</p>
        <Button
          onClick={() => addToCartCtx(cartMeal)}
          text="Add to Cart"
          btnStyle="btn-bg"
        />
      </div>
    </li>
  );
}
