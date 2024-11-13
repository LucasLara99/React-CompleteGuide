import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleSubmit() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2> {enteredPlayerName ? `Welcome ${enteredPlayerName}` : 'Please enter your name'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
