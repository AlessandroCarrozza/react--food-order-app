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
    <div id="history">
      <Button
        text="Back to meals"
        btnStyle="btn-bg"
        onClick={() => setIsHistoryCtx(false)}
      />
      {/* {ordersHistory !== undefined
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
        : "no results"} */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Meals</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {ordersHistory !== undefined
            ? ordersHistory.map((order) => (
                <tr key={order.id} className="row">
                  <td>200398</td>
                  <td>iPhone X 64Gb Grey</td>
                  <td>$999.00</td>
                  <td>1</td>
                  <td>$999.00</td>
                </tr>
              ))
            : "no results"}
        </tbody>
      </table>
    </div>
  );
}
