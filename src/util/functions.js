// update a meal quantity
export function updateMeal(array, array2, name, initialPrice) {
  // console.log(array2);
  const newMeal = array.reduce(
    (acc, obj) => {
      console.log(obj.name);
      if (obj.name === name) {
        acc.quantity += obj.quantity;
        const foundMeal = array2.find((singleMeal) => singleMeal.name === name);
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
