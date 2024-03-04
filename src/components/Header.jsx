import logo from "../assets/logo.jpg";
import Button from "./ui/Button";
import { useContext, useRef } from "react";
import Modal from "./Order/Modal";
import { OrderContext } from "../store/food-order-context";

export default function Header() {
  const { cartCtx, setIsHistoryCtx, isHistoryCtx } = useContext(OrderContext);
  const dialog = useRef();

  const totQuantity = cartCtx.reduce((acc, obj) => {
    acc += obj.quantity;
    return acc;
  }, 0);

  function handleOpenCartClick() {
    console.log("open modal");
    dialog.current.open();
  }
  return (
    <>
      <Modal ref={dialog}></Modal>
      <header>
        <div id="logo">
          <img src={logo} alt="Logo" />
          <h1>reactfood</h1>
        </div>

        <div>
          <Button
            text="History"
            btnStyle="btn-cart"
            onClick={() => setIsHistoryCtx(true)}
          />
          <Button
            onClick={() => handleOpenCartClick()}
            text={`Cart(${totQuantity})`}
            btnStyle="btn-cart"
            disabled={isHistoryCtx ? true : false}
          />
        </div>
      </header>
    </>
  );
}
