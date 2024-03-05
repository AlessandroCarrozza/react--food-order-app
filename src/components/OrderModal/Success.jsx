import Button from "../ui/Button";

export default function Success({ onClose, onForm }) {
  return (
    <div id="success">
      <h1>Success!</h1>
      <p>Your order is your order is.</p>
      <p>Thanks for your time, see you next time!</p>
      <div>
        <Button
          text="Okay"
          btnStyle="btn-bg"
          onClick={() => {
            onClose();
            onForm(false);
          }}
        />
      </div>
    </div>
  );
}
