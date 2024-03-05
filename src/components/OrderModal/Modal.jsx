import { createPortal } from "react-dom";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from "react";
import Cart from "./Cart";
import OrderForm from "./OrderForm";
import { OrderContext } from "../../store/food-order-context";

const Modal = forwardRef(function Modal({}, ref) {
  const [isOrderForm, setIsOrderForm] = useState(false);
  const dialog = useRef();

  const { cartCtx } = useContext(OrderContext);
  const totPrice = cartCtx.reduce((acc, obj) => acc + obj.price, 0).toFixed(2);

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
        <OrderForm
          onClose={closeModal}
          totPrice={totPrice}
          onForm={setIsOrderForm}
        />
      ) : (
        <Cart
          onClose={closeModal}
          totPrice={totPrice}
          onForm={setIsOrderForm}
        />
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
