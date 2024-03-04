import { useEffect, useState } from "react";
import { fetchOrdersHistory } from "../http";

export default function OrdersHistory() {
  const [ordersHistory, setOrdersHistory] = useState();
  const [errorHistory, setErrorHistory] = useState();

  useEffect(() => {
    async function getOrdersHistory() {
      try {
        const data = await fetchOrdersHistory();
        console.log(data);
        setOrdersHistory(data);
      } catch (error) {
        setErrorHistory({
          message: error.message || "Failed to get available meals",
        });
      }
    }
    getOrdersHistory();
  }, [fetchOrdersHistory]);
  console.log(ordersHistory);
  return (
    <div>
      {ordersHistory !== undefined
        ? ordersHistory.map((order) => (
            <ul key={order.id}>
              <li>{order.customer.name}</li>
              <ul>
                {order.items.map((item) => (
                  <li key={item.name}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>
              <li>${order.totPrice}</li>
            </ul>
          ))
        : "no results"}
    </div>
  );
}
