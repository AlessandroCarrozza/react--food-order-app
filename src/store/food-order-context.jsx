import { createContext, useState, useCallback } from "react";
import { filterMeals, updateMeal } from "../utils/functions";
import { log } from "../log";

export const OrderContext = createContext({
  availableMealsCtx: [],
  setAvailableMealsCtx: () => {},
  cartCtx: [],
  addToCartCtx: () => {},
  setCartCtx: () => {},
  isHistoryCtx: null,
  setIsHistoryCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [isHistory, setIsHistory] = useState(false);

  log("<Context /> rendered", 1);

  // add to cart for the + cart & card button
  const addToCart = useCallback(
    (meal) => {
      const newMeal = updateMeal(cart, availableMeals, meal); // reduce function imported
      setCart((prevMeals) => {
        // remove multiple objects meal with filter
        const updatedMeals = filterMeals(prevMeals, newMeal);
        return [...updatedMeals, { ...newMeal }];
      });
    },
    [cart]
  );

  // console.log(cart);

  const ctxValue = {
    availableMealsCtx: availableMeals,
    setAvailableMealsCtx: setAvailableMeals,
    cartCtx: cart,
    addToCartCtx: addToCart,
    setCartCtx: setCart,
    isHistoryCtx: isHistory,
    setIsHistoryCtx: setIsHistory,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
