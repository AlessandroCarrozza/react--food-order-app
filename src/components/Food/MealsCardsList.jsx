import MealCard from "./MealCard";
import { fetchAvailableFood } from "../../http";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { OrderContext } from "../../store/food-order-context";
import OrdersHistory from "../OrdersHistory";
import ErrorBox from "../ui/ErrorBox";
import { useFetch } from "../../hooks/useFetch";

export default function MealsCardsList() {
  // context
  const { setAvailableMealsCtx, isHistoryCtx } = useContext(OrderContext);

  // custom hook for fetch available meals
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchAvailableFood, []);

  // add availablesMeals to the context, updating the state
  // when the fetch function ends, the re-render actives this
  useEffect(() => {
    setAvailableMealsCtx(availableMeals);
  }, [availableMeals]);

  return (
    <>
      <div>
        {!isHistoryCtx ? (
          <ul id="food-cards-list">
            {isFetching && <p>Loading...</p>}
            {error ? (
              <ErrorBox error={error.message} />
            ) : (
              availableMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} img={meal.image} />
              ))
            )}
          </ul>
        ) : (
          <OrdersHistory />
        )}
      </div>
    </>
  );
}
