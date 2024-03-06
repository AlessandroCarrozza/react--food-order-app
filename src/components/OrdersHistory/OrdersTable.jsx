import styles from "./OrdersTable.module.css";
import { log } from "../../log";

export default function OrdersTable({ ordersHistory }) {
  log("<OrdersTable /> rendered", 4);
  return (
    <table className={styles.table}>
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
          <tr key={order.id} className={styles.row}>
            <td>{order.id}</td>
            <td>
              {order.customer.name} <br /> {order.customer.email}
            </td>
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
  );
}
