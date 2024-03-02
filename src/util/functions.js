// update a meal quantity
export function updateMeal(array, meal, name, price) {
  const newMeal = array.reduce(
    (acc, obj) => {
      if (obj.name === meal.name) {
        acc.quantity += 1;
      }
      return acc;
    },
    {
      name: name,
      price: price,
      quantity: 1,
    }
  );
  return newMeal;
}
