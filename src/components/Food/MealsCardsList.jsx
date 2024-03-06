import MealCard from "./MealCard";
import { fetchAvailableFood } from "../../http";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { OrderContext } from "../../store/food-order-context";
import OrdersHistory from "../OrdersHistory/OrdersHistory";
import ErrorBox from "../ui/ErrorBox";
import { useFetch } from "../../hooks/useFetch";
import styles from "./MealsCardsList.module.css";
import { log } from "../../log";

export default function MealsCardsList() {
  // context
  const { setAvailableMealsCtx, isHistoryCtx } = useContext(OrderContext);

  log("<MealsCardsList /> rendered", 2);

  // custom hook for fetch available meals
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchAvailableFood, []);

  // add availablesMeals to the context, updating the state
  // when the fetch function ends, the re-render actives this
  useEffect(() => {
    console.log("availableMeals filled");
    setAvailableMealsCtx(availableMeals);
  }, [availableMeals]);

  return (
    <div>
      {/* click or not click history */}
      {!isHistoryCtx ? (
        <ul id={styles.foodCardsList}>
          {isFetching && <p>Loading...</p>}
          {/* error or correct views */}
          {error ? (
            <ErrorBox error={error.message} />
          ) : (
            availableMeals.map((meal) => (
              <MealCard key={meal.id} availableMeal={meal} img={meal.image} />
            ))
          )}
        </ul>
      ) : (
        <OrdersHistory />
      )}
    </div>
  );
}
