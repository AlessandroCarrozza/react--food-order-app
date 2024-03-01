import FoodCard from "./FoodCard";
import { fetchAvailableFood } from "../../http";
import { useState } from "react";
import { useEffect } from "react";

export default function FoodCardsList() {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();

  async function getAvailableFood() {
    try {
      await fetchAvailableFood();
    } catch (error) {
      setError({
        message: error.message || "Failed to fetch user places",
      });
    }
  }

  useEffect(() => {
    async function getAvailableFood() {
      try {
        await fetchAvailableFood();
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch available food",
        });
      }
    }
  }, []);

  return (
    <ul id="food-cards-list">
      {/* here .map */}
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </ul>
  );
}
