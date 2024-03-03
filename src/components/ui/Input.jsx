export default function Input({
  label,
  type = "text",
  inpStyle = "user-detail",
}) {
  return (
    <div className={inpStyle}>
      <label>{label}</label>
      <input placeholder="Type here..." type={type} />
    </div>
  );
}
