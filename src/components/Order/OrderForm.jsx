import { useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function OrderForm({ onClose, totPrice, onForm }) {
  const [userDetails, setUserDetails] = useState({});

  function getUserDetails() {}

  return (
    <form id="order-form">
      <Button
        onClick={() => {
          onForm(false);
        }}
        text={<i className="fa-solid fa-backward"></i>}
        btnStyle="btn-back"
      />
      <h1>Checkout</h1>
      <div>Total Amount: ${totPrice}</div>
      <Input label="Full Name" name="fullName" />
      <Input label="E-Email Address" type="email" name="email" />
      <Input label="Street" name="street" />

      <div>
        <Input
          inpStyle="user-detail short"
          label="Postal Code"
          type="num"
          name="postalCode"
        />
        <Input inpStyle="user-detail short" label="City" name="city" />
      </div>

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
