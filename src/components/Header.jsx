import logo from "../assets/logo.jpg";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Logo" />
        <h1>reactfood</h1>
      </div>

      <div id="cart">
        <Button text={`Cart(${0})`} btnStyle="btn-cart" />
      </div>
    </header>
  );
}
