import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { log } from "../../log";

export default function Cart({ onClose, totPrice, onForm }) {
  // context
  const { cartCtx } = useContext(OrderContext);

  log("<Cart /> rendered", 4);

  // alphabetic sorted x name
  const sortedCartMeals = cartCtx.sort((a, b) => a.name.localeCompare(b.name));
  // console.log(sortedCartMeals);

  return (
    <div id={styles.cart}>
      <h2>Your Cart</h2>
      {/* ordering meals list */}
      <ul id={styles.cartList}>
        {sortedCartMeals.map((meal) => (
          <CartItem key={meal.name} meal={meal} />
        ))}
      </ul>

      <div className={styles.totPrice}>${totPrice}</div>

      <div className={styles.cartButtons}>
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
