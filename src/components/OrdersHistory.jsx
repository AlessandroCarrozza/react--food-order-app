import { useContext, useEffect, useState } from "react";
import { fetchOrdersHistory } from "../http";
import Button from "./ui/Button";
import { OrderContext } from "../store/food-order-context";
import ErrorBox from "./ui/ErrorBox";

export default function OrdersHistory() {
  const { setIsHistoryCtx, setIsFetchingCtx, isFetchingCtx } =
    useContext(OrderContext);
  const [ordersHistory, setOrdersHistory] = useState();
  const [errorHistory, setErrorHistory] = useState();

  useEffect(() => {
    async function getOrdersHistory() {
      setIsFetchingCtx(true);
      try {
        const data = await fetchOrdersHistory();
        console.log(data);
        setOrdersHistory(data);
      } catch (error) {
        setErrorHistory({
          message: error.message || "Failed to get available meals",
        });
      }
      setIsFetchingCtx(false);
    }
    getOrdersHistory();
  }, [fetchOrdersHistory]);
  console.log(ordersHistory);
  return (
    <div id="history">
      {isFetchingCtx ? "Loading" : ""}
      <Button
        text="Back to meals"
        btnStyle="btn-bg mb"
        onClick={() => setIsHistoryCtx(false)}
      />

      {ordersHistory !== undefined ? (
        ordersHistory.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Destination</th>
                <th>Food</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ordersHistory.map((order) => (
                <tr key={order.id} className="row">
                  <td>{order.id}</td>
                  <td>{order.customer.name}</td>
                  <td>
                    {order.customer.city}
                    <br />
                    {order.customer["postal-code"]}
                    <br />
                    {order.customer.street}
                  </td>
                  <td>
                    {order.items.map((meal) => (
                      <span key={meal.name}>
                        {meal.name} x {meal.quantity}
                        <br />
                      </span>
                    ))}
                  </td>
                  <td>${order.totPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders</p>
        )
      ) : errorHistory ? (
        <ErrorBox error={errorHistory.message} />
      ) : (
        ""
      )}
    </div>
  );
}
