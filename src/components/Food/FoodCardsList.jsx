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
      try {
        const data = await fetchAvailableFood();
        console.log(data);
        setAvailableMeals(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch available food",
        });
      }
    }
    getAvailableFood();
  }, []);

  return (
    <ul id="food-cards-list">
      {/* here .map */}
      {availableMeals.map((meal) => (
        <FoodCard
          key={meal.id}
          img={meal.image}
          name={meal.name}
          price={meal.price}
          description={meal.description}
        />
      ))}
    </ul>
  );
}
