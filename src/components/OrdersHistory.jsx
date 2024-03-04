import { useContext, useEffect, useState } from "react";
import { fetchOrdersHistory } from "../http";
import Button from "./ui/Button";
import { OrderContext } from "../store/food-order-context";

export default function OrdersHistory() {
  const { setIsHistoryCtx } = useContext(OrderContext);
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
      <Button
        text="Back to meals"
        btnStyle="btn-bg"
        onClick={() => setIsHistoryCtx(false)}
      />
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
