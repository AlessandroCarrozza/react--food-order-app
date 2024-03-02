import { useContext } from "react";
import { OrderContext } from "../../store/food-order-context";

export default function Cart() {
  const { cartCtx } = useContext(OrderContext);
  return (
    <ul>
      {/* {cartCtx.map((meal) => (
        <li key={meal.name}>{meal.name}</li>
      ))} */}
    </ul>
  );
}
