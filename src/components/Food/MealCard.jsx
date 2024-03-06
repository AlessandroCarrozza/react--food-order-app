import { OrderContext } from "../../store/food-order-context";
import { findMeal } from "../../utils/functions";
import Button from "../ui/Button";
import { useContext } from "react";
import styles from "./MealCard.module.css";
import { useMemo } from "react";
import { log } from "../../log";

export default function MealCard({ availableMeal, img }) {
  // context
  const { addToCartCtx, cartCtx } = useContext(OrderContext);

  log("<MealCard /> rendered", 3);

  // check if the selected meal is already in the cart
  const mealFromCart = useMemo(
    () => findMeal(cartCtx, availableMeal.name),
    [cartCtx, availableMeal]
  );

  // if there is not mealFromCart, take the available meal with the same name
  const cartMeal = mealFromCart === undefined ? availableMeal : mealFromCart;
  // console.log(mealFromCart);
  // console.log(availableMeal);
  return (
    <li className={styles.foodCard}>
      <img src={`../../../backend/public/${img}`} alt={availableMeal.name} />
      <div className={styles.foodInfo}>
        <h3>{availableMeal.name}</h3>
        <div className={styles.price}>
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
