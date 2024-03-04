import { useContext, useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { OrderContext } from "../../store/food-order-context";
import { sendUserOrder } from "../../http";

export default function OrderForm({ onClose, totPrice, onForm }) {
  const { cartCtx, setErrorCtx } = useContext(OrderContext);

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
    };
    console.log(orderDatas);
    try {
      await sendUserOrder(orderDatas);
    } catch (error) {
      setErrorCtx({
        message: error.message || "Failed to send order",
      });
    }
  }

  return (
    <form id="order-form" onSubmit={handleSubmitOrder}>
      <Button
        onClick={() => {
          onForm(false);
        }}
        text={<i className="fa-solid fa-backward"></i>}
        btnStyle="btn-back"
      />
      <h1>Checkout</h1>
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
  );
}
