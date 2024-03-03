import FoodCard from "./FoodCard";
import { fetchAvailableFood } from "../../http";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { OrderContext } from "../../store/food-order-context";

export default function FoodCardsList() {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  const { availableMealsCtx, setAvailableMealsCtx } = useContext(OrderContext);

  useEffect(() => {
    async function getAvailableFood() {
      setIsFetching(true);
      try {
        const data = await fetchAvailableFood();
        console.log(data);
        setAvailableMealsCtx(data);
      } catch (error) {
        console.log(error.message);
        setError({
          message: error.message,
        });
      }
      setIsFetching(false);
    }
    getAvailableFood();
  }, []);

  return (
    <ul id="food-cards-list">
      {error ? <p>{error.message}</p> : ""}
      {isFetching && <p>Download...</p>}
      {availableMealsCtx.map((meal) => (
        <FoodCard key={meal.id} meal={meal} img={meal.image} />
      ))}
    </ul>
  );
}
