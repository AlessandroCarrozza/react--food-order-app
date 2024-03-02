import { createContext, useState } from "react";
import { updateMeal } from "../util/functions";

export const OrderContext = createContext({
  cartCtx: [],
  addToCartCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(meal) {
    const { name, price } = meal;
    const newMeal = updateMeal(cart, meal, name, price); // reduce function imported
    setCart((prevMeals) => {
      // remove multiple objects meal with filter
      const updatedMeals = prevMeals.filter(
        (prevMeal) => prevMeal.name !== newMeal.name
      );
      return [
        ...updatedMeals,
        { ...newMeal, price: newMeal.quantity * newMeal.price },
      ];
    });
  }
  console.log(cart);
  const ctxValue = {
    cartCtx: cart,
    addToCartCtx: addToCart,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
