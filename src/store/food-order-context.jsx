import { createContext, useContext, useState } from "react";
import { updateMeal } from "../util/functions";

export const OrderContext = createContext({
  availableMealsCtx: [],
  setAvailableMealsCtx: () => {},
  cartCtx: [],
  addToCartCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(meal) {
    const { name, price } = meal;
    const newMeal = updateMeal(cart, availableMeals, name, price); // reduce function imported
    setCart((prevMeals) => {
      // remove multiple objects meal with filter
      const updatedMeals = prevMeals.filter(
        (prevMeal) => prevMeal.name !== newMeal.name
      );
      return [...updatedMeals, { ...newMeal }];
    });
  }

  console.log(cart);

  const ctxValue = {
    availableMealsCtx: availableMeals,
    setAvailableMealsCtx: setAvailableMeals,
    cartCtx: cart,
    addToCartCtx: addToCart,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
