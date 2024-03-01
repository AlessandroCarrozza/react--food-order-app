import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Logo" />
        <h1>reactfood</h1>
      </div>

      <div id="cart">
        <button>Cart</button>
      </div>
    </header>
  );
}
