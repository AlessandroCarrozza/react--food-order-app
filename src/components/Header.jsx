import logo from "../assets/logo.jpg";
import Button from "./ui/Button";
import { useContext, useRef } from "react";
import Modal from "./OrderModal/Modal";
import { OrderContext } from "../store/food-order-context";
import styles from "./Header.module.css";
import { log } from "../log";

export default function Header() {
  // context
  const { cartCtx, setIsHistoryCtx, isHistoryCtx } = useContext(OrderContext);

  const dialog = useRef();

  log("<Header /> rendered", 2);

  // tot quantity meals for cart
  const totQuantity = cartCtx.reduce((acc, obj) => {
    acc += obj.quantity;
    return acc;
  }, 0);

  // cart modal open
  function handleOpenModal() {
    console.log("open modal");
    dialog.current.open();
  }
  return (
    <>
      <Modal ref={dialog}></Modal>
      <header id={styles.header}>
        <div id="logo">
          <img src={logo} alt="Logo" />
          <h1>reactfood</h1>
        </div>

        <div>
          {/* history */}
          <Button
            text="History"
            btnStyle="btn-cart"
            onClick={() => setIsHistoryCtx(true)}
          />

          {/* cart */}
          <Button
            onClick={() => handleOpenModal()}
            text={`Cart(${totQuantity})`}
            btnStyle="btn-cart"
            disabled={isHistoryCtx ? true : false}
          />
        </div>
      </header>
    </>
  );
}
