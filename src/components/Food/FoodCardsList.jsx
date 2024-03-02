import FoodCard from "./FoodCard";
import { fetchAvailableFood } from "../../http";
import { useState } from "react";
import { useEffect } from "react";

export default function FoodCardsList() {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    async function getAvailableFood() {
      setIsFetching(true);
      try {
        const data = await fetchAvailableFood();
        console.log(data);
        setAvailableMeals(data);
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
      {availableMeals.map((meal) => (
        <FoodCard
          key={meal.id}
          meal={meal}
          img={meal.image}
          name={meal.name}
          price={meal.price}
          description={meal.description}
        />
      ))}
    </ul>
  );
}
