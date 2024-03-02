// update a meal quantity
export function updateMeal(array, availablesArray, name, initialPrice) {
  // console.log(availablesArray);
  const newMeal = array.reduce(
    (acc, obj) => {
      console.log(obj.name);
      if (obj.name === name) {
        acc.quantity += obj.quantity;
        // for getting and add the single price from the chosen meal
        const foundMeal = availablesArray.find(
          (singleMeal) => singleMeal.name === name
        );
        console.log(foundMeal);
        acc.price += +foundMeal.price;
      }
      return acc;
    },
    {
      name: name,
      price: +initialPrice,
      quantity: 1,
    }
  );
  return newMeal;
}
