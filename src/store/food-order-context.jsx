import { createContext, useState } from "react";

export const OrderContext = createContext({ addToCartCtx: () => {} });

export default function OrderContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(meal) {
    const { name, price } = meal;
    setCart((prevMeals) => [
      ...prevMeals,
      { name: name, price: price, quantity: 1 },
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
