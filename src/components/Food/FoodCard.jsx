import Button from "../ui/Button";

export default function FoodCard() {
  return (
    <li className="food-card">
      <div className="food-img">
        <img src="" alt="" />
      </div>
      <div className="food-info">
        <h3>Name Food</h3>
        <div className="price">
          <span>22,44</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          debitis quae laboriosam repellendus fugit voluptas eveniet dolorum
          ullam.
        </p>
        <div>
          <Button text="Add to Cart" btnStyle="btn-bg" />
        </div>
      </div>
    </li>
  );
}
