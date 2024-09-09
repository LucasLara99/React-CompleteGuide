import Input from "./Input";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input label="Initial Investment" type="number" />
        <Input label="Anual investment" type="number" />
        <Input label="Expected return" type="number" />
        <Input label="Duration" type="number" />
      </div>
    </div>
  );
}