export default function UserInput({ userInput, onChangeInpunt }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChangeInpunt('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>Anual investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChangeInpunt('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChangeInpunt('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event) => onChangeInpunt('duration', event.target.value)} />
        </p>
      </div>
    </section>
  );
}