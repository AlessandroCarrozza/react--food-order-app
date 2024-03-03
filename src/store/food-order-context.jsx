import { createContext, useState } from "react";
import { filterMeals, updateMeal } from "../util/functions";

export const OrderContext = createContext({
  availableMealsCtx: [],
  setAvailableMealsCtx: () => {},
  cartCtx: [],
  addToCartCtx: () => {},
  setCartCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(meal) {
    const newMeal = updateMeal(cart, availableMeals, meal); // reduce function imported
    setCart((prevMeals) => {
      // remove multiple objects meal with filter
      const updatedMeals = filterMeals(prevMeals, newMeal);
      return [...updatedMeals, { ...newMeal }];
    });
  }

  console.log(cart);

  const ctxValue = {
    availableMealsCtx: availableMeals,
    setAvailableMealsCtx: setAvailableMeals,
    cartCtx: cart,
    addToCartCtx: addToCart,
    setCartCtx: setCart,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
