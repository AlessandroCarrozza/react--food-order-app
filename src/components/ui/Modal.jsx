import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Cart from "../Order/Cart";
import OrderForm from "../Order/OrderForm";
import Button from "./Button";

const Modal = forwardRef(function Modal({}, ref) {
  const [isOrderForm, setIsOrderForm] = useState(false);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function closeModal() {
    dialog.current.close();
  }

  return createPortal(
    <dialog id="modal" ref={dialog}>
      {isOrderForm ? <OrderForm /> : <Cart />}
      <Button text="Close" onClick={() => closeModal()} />
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
