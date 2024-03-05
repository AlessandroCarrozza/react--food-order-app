import { createContext, useState } from "react";
import { filterMeals, updateMeal } from "../utils/functions";

export const OrderContext = createContext({
  availableMealsCtx: [],
  setAvailableMealsCtx: () => {},
  cartCtx: [],
  addToCartCtx: () => {},
  setCartCtx: () => {},
  isFetchingCtx: null,
  setIsFetchingCtx: () => {},
  isHistoryCtx: null,
  setIsHistoryCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [isHistory, setIsHistory] = useState(false);

  const [isFetching, setIsFetching] = useState();

  // add to cart for the + cart & card button
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
    isFetchingCtx: isFetching,
    setIsFetchingCtx: setIsFetching,
    isHistoryCtx: isHistory,
    setIsHistoryCtx: setIsHistory,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
