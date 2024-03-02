import { createContext, useState } from "react";

export const OrderContext = createContext({
  cartCtx: [],
  addToCartCtx: () => {},
});

export default function OrderContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  // function addToCart(meal) {
  //   const { name, price } = meal;
  //   setCart((prevMeals) => [
  //     ...prevMeals,
  //     { name: name, price: price, quantity: 1 },
  //   ]);
  // }
  function addToCart(meal) {
    const { name, price } = meal;
    const newMeal = cart.reduce(
      (acc, obj) => {
        console.log(obj.name);
        if (obj.name === meal.name) {
          acc.quantity += obj.quantity;
          acc.price += obj.price;
        }
        return acc;
      },
      {
        name: name,
        price: +price,
        quantity: 1,
      }
    );
    console.log(newMeal);
    setCart((prevMeals) => {
      const updatedMeals = prevMeals.filter(
        (prevMeal) => prevMeal.name !== newMeal.name
      );
      console.log(updatedMeals);
      return [...updatedMeals, newMeal];
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
