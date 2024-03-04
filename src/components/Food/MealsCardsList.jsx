import MealCard from "./MealCard";
import { fetchAvailableFood } from "../../http";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { OrderContext } from "../../store/food-order-context";
import OrdersHistory from "../OrdersHistory";

export default function MealsCardsList() {
  // context
  const {
    availableMealsCtx,
    setAvailableMealsCtx,
    errorCtx,
    setErrorCtx,
    isFetchingCtx,
    setIsFetchingCtx,
    isHistoryCtx,
  } = useContext(OrderContext);

  useEffect(() => {
    async function getAvailableFood() {
      setIsFetchingCtx(true);
      try {
        const data = await fetchAvailableFood();
        console.log(data);
        setAvailableMealsCtx(data);
      } catch (error) {
        console.log(error.message);
        setErrorCtx({
          message: error.message || "Failed to get available meals",
        });
      }
      setIsFetchingCtx(false);
    }
    getAvailableFood();
  }, []);

  return (
    <>
      <div>
        {!isHistoryCtx ? (
          <ul id="food-cards-list">
            {errorCtx ? <p>{errorCtx.message}</p> : ""}
            {isFetchingCtx && <p>Loading...</p>}
            {availableMealsCtx.map((meal) => (
              <MealCard key={meal.id} meal={meal} img={meal.image} />
            ))}
          </ul>
        ) : (
          <OrdersHistory />
        )}
      </div>
    </>
  );
}
