import FoodCard from "./FoodCard";

export default function FoodCardsList() {
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
