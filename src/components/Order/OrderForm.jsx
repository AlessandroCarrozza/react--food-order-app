import Button from "../ui/Button";
import Input from "../ui/Input";

export default function OrderForm({ onClose }) {
  return (
    <div id="order-form">
      <h1>Checkout</h1>
      <div>Total Amount: ${100}</div>
      <Input label="Full Name" />
      <Input label="E-Email Address" type="email" />
      <Input label="Street" />

      <div>
        <Input inpStyle="user-detail short" label="Postal Code" type="num" />
        <Input inpStyle="user-detail short" label="City" />
      </div>

      <div className="cart-buttons">
        <Button text="Close" onClick={() => onClose()} />
        <Button text="Submit Order" btnStyle="btn-bg" />
      </div>
    </div>
  );
}
