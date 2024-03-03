import logo from "../assets/logo.jpg";
import Button from "./ui/Button";
import { useContext, useRef } from "react";
import Modal from "./ui/Modal";
import { OrderContext } from "../store/food-order-context";

export default function Header() {
  const { cartCtx } = useContext(OrderContext);
  const dialog = useRef();
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
            onClick={() => handleOpenCartClick()}
            text={`Cart(${cartCtx.length})`}
            btnStyle="btn-cart"
          />
        </div>
      </header>
    </>
  );
}
