import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Cart from "../Order/Cart";
import OrderForm from "../Order/OrderForm";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
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
      <Cart />
      <OrderForm />
      <Button text="Close" onClick={() => closeModal()} />
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
