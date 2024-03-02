export default function Button({ text, btnStyle = "btn", ...props }) {
  return (
    <button {...props} className={btnStyle}>
      {text}
    </button>
  );
}
