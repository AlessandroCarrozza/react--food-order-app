export async function fetchAvailableFood() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch available meals");
  }
  return resData;
}

export async function sendUserOrder(order) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ order: order }),
    headers: { "Content-type": "application/json" },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to send order");
  }
  return resData.message;
}
