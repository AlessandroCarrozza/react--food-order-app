export default function ErrorBox({ error }) {
  console.log("errorBox render");
  return <div className="error">{error}</div>;
}
