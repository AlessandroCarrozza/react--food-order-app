import { createContext, useState } from "react";

export const OrderContext = createContext({ addToCartCtx: () => {} });

export default function OrderContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(newMeal) {
    setCart((prevMeals) => [
      ...prevMeals,
      { name: newMeal.name, price: newMeal.price, quantity: 1 },
    ]);
  }
  console.log(cart);
  const ctxValue = {
    addToCartCtx: addToCart,
  };
  return (
    <OrderContext.Provider value={ctxValue}>{children}</OrderContext.Provider>
  );
}
