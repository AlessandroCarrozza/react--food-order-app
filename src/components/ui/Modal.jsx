import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Cart from "../Order/Cart";
import OrderForm from "../Order/OrderForm";

const Modal = forwardRef(function Modal({}, ref) {
  const [isOrderForm, setIsOrderForm] = useState(true);
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
    <dialog className="modal" ref={dialog}>
      {isOrderForm ? (
        <OrderForm onClose={closeModal} />
      ) : (
        <Cart onClose={closeModal} />
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
