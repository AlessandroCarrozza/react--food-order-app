import Button from "../ui/Button";

export default function FoodCard({ img, name, price, description }) {
  return (
    <li className="food-card">
      <img src={`../../../backend/public/${img}`} alt="" />
      <div className="food-info">
        <h3>{name}</h3>
        <div className="price">
          <span>{price}$</span>
        </div>
        <p>{description}</p>
        <div>
          <Button text="Add to Cart" btnStyle="btn-bg" />
        </div>
      </div>
    </li>
  );
}
