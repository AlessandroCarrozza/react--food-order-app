// update a meal quantity
export function updateMeal(array, availablesArray, meal) {
  // console.log(availablesArray);
  const newMeal = array.reduce(
    (acc, obj) => {
      console.log(obj.name);
      if (obj.name === meal.name) {
        acc.quantity += obj.quantity;
        // for getting and add the single price from the chosen meal
        const foundMeal = findMeal(availablesArray, meal.name);
        // console.log(foundMeal);
        acc.price += +foundMeal.price;
      }
      return acc;
    },
    {
      name: meal.name,
      price: +meal.price,
      quantity: 1,
    }
  );
  return newMeal;
}

// filter meals
export function filterMeals(array, meal) {
  const filteredMeals = array.filter((prevMeal) => prevMeal.name !== meal.name);
  return filteredMeals;
}

// find a meal
export function findMeal(array, mealName) {
  const foundMeal = array.find((singleMeal) => singleMeal.name === mealName);
  return foundMeal;
}
