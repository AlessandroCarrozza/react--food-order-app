import { useContext, useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { OrderContext } from "../../store/food-order-context";
import { sendUserOrder } from "../../http";
import ErrorBox from "../ui/ErrorBox";

export default function OrderForm({ onClose, totPrice, onForm }) {
  const { cartCtx, setCartCtx, setIsFetchingCtx, isFetchingCtx } =
    useContext(OrderContext);

  const [errorForm, setErrorForm] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const fullName = useRef();
  const email = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  async function handleSubmitOrder(event) {
    event.preventDefault();
    const orderDatas = {
      items: [...cartCtx],
      customer: {
        name: fullName.current.value,
        email: email.current.value,
        street: street.current.value,
        "postal-code": postalCode.current.value,
        city: city.current.value,
      },
      totPrice: totPrice,
    };
    // console.log(orderDatas);
    setIsFetchingCtx(true);
    try {
      await sendUserOrder(orderDatas);
      // onForm(false);
      setIsSuccess(true);
      setCartCtx([]);
      // onClose();
    } catch (error) {
      setErrorForm({
        message: error.message || "Failed to send order",
      });
    }
    setIsFetchingCtx(false);
  }

  return (
    <div>
      {!isSuccess ? (
        <form id="order-form" onSubmit={handleSubmitOrder}>
          {isFetchingCtx ? "Loading" : ""}
          {errorForm ? <ErrorBox error={errorForm.message} /> : ""}
          <div className="checkout">
            <h1>Checkout</h1>
            <Button
              onClick={() => {
                onForm(false);
              }}
              text={<i className="fa-solid fa-backward"></i>}
              btnStyle="btn-back"
            />
          </div>
          <div>Total Amount: ${totPrice}</div>

          {/* inputs */}
          <Input ref={fullName} label="Full Name" />
          <Input ref={email} label="E-Email Address" type="email" />
          <Input ref={street} label="Street" />
          <div>
            <Input
              ref={postalCode}
              inpStyle="user-detail short"
              label="Postal Code"
              name="postalCode"
            />
            <Input ref={city} inpStyle="user-detail short" label="City" />
          </div>

          {/* buttons actions */}
          <div className="cart-buttons">
            <Button
              text="Close"
              onClick={() => {
                onForm(false);
                onClose();
              }}
            />
            <Button text="Submit Order" btnStyle="btn-bg" type="submit" />
          </div>
        </form>
      ) : (
        <div id="success">
          <h1>Success!</h1>
          <p>Your order is your order is.</p>
          <p>Thanks for your time, see you next time!</p>
          <div>
            <Button
              text="Okay"
              btnStyle="btn-bg"
              onClick={() => {
                onClose();
                onForm(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
