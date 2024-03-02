// update a meal quantity
export function updateMeal(array, meal, name, price) {
  const newMeal = array.reduce(
    (acc, obj) => {
      console.log(obj.name);
      if (obj.name === meal.name) {
        acc.quantity += obj.quantity;
      }
      return acc;
    },
    {
      name: name,
      price: +price,
      quantity: 1,
    }
  );
  return newMeal;
}
