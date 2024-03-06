export default function Button({ text, btnStyle = "btn", ...props }) {
  console.log("button render");
  return (
    <button {...props} className={btnStyle}>
      {text}
    </button>
  );
}
