export default function Button({ text, btnStyle = "btn" }) {
  return <button className={btnStyle}>{text}</button>;
}
