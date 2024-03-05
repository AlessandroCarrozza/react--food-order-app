import { useContext } from "react";
import { fetchOrdersHistory } from "../../http";
import Button from "../ui/Button";
import { OrderContext } from "../../store/food-order-context";
import ErrorBox from "../ui/ErrorBox";
import { useFetch } from "../../hooks/useFetch";
import OrdersTable from "./OrdersTable";

export default function OrdersHistory() {
  // context
  const { setIsHistoryCtx } = useContext(OrderContext);

  // custom hook for fetch orders history
  const {
    isFetching,
    error,
    fetchedData: ordersHistory,
  } = useFetch(fetchOrdersHistory, []);

  // console.log(ordersHistory);

  // error or no orders yet
  const noOrders = error ? (
    <ErrorBox error={error.message} />
  ) : (
    <p>No orders</p>
  );

  return (
    <div id="history">
      {isFetching ? "Loading" : ""}
      <Button
        text="Back to meals"
        btnStyle="btn-bg mb"
        onClick={() => setIsHistoryCtx(false)}
      />

      {ordersHistory.length > 0 ? (
        <OrdersTable ordersHistory={ordersHistory} />
      ) : (
        noOrders
      )}
    </div>
  );
}
