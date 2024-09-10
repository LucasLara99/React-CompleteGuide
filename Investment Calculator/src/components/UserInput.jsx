export default function UserInput({ userInput, onChangeInpunt }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initial_investment} onChange={(event) => onChangeInpunt('initial_investment', event.target.value)} />
        </p>
        <p>
          <label>Anual investment</label>
          <input type="number" required value={userInput.anual_investment} onChange={(event) => onChangeInpunt('anual_investment', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" required value={userInput.expected_return} onChange={(event) => onChangeInpunt('expected_return', event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event) => onChangeInpunt('duration', event.target.value)} />
        </p>
      </div>
    </section>
  );
}