import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [datos, setDatos] = useState(INITIAL_DATA);

  function handleChange(inputIdentifier, newValue) {
    setDatos(prevDatos => {
      return {
        ...prevDatos,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={datos} onChangeInpunt={handleChange} />
      <Result userInput={datos} />
    </>
  )
}

export default App
