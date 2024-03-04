import { useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function OrderForm({ onClose, totPrice, onForm }) {
  const [userDetails, setUserDetails] = useState({});

  const fullName = useRef();
  const email = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  function getUserDetails(event) {
    // console.log(event);
    event.preventDefault();
    setUserDetails({
      fullName: fullName.current.value,
      email: email.current.value,
      street: street.current.value,
      postalCode: postalCode.current.value,
      city: city.current.value,
    });
  }
  console.log(userDetails);

  return (
    <form id="order-form" onSubmit={getUserDetails}>
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
