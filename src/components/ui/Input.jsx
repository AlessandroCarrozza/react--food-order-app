export default function Input({
  label,
  type = "text",
  inpStyle = "user-detail",
}) {
  return (
    <div className={inpStyle}>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}
