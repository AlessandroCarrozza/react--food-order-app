import { useContext, useEffect, useState } from "react";
import { fetchOrdersHistory } from "../http";
import Button from "./ui/Button";
import { OrderContext } from "../store/food-order-context";
import ErrorBox from "./ui/ErrorBox";
import { useFetch } from "../hooks/useFetch";

export default function OrdersHistory() {
  // context
  const { setIsHistoryCtx } = useContext(OrderContext);

  // custom hook for fetch orders history
  const {
    isFetching,
    error,
    fetchedData: ordersHistory,
  } = useFetch(fetchOrdersHistory, []);

  console.log(ordersHistory);
  return (
    <div id="history">
      {isFetching ? "Loading" : ""}
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
      ) : error ? (
        <ErrorBox error={error.message} />
      ) : (
        ""
      )}
    </div>
  );
}
