import { forwardRef } from "react";

export default forwardRef(function Input(
  { label, type = "text", inpStyle = "user-detail", ...props },
  ref
) {
  return (
    <div className={inpStyle}>
      <label>{label}</label>
      <input ref={ref} {...props} placeholder="Type here..." type={type} />
    </div>
  );
});
