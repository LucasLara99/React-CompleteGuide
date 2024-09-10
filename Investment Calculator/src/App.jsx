import Header from "./components/Header"
import { calculateInvestmentResults } from "./util/investment"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

const INITIAL_DATA = {
  initial_investment: 10000,
  anual_investment: 1200,
  expected_return: 6,
  duration: 10
}

function App() {
  const [datos, setDatos] = useState(INITIAL_DATA);

  function handleChange(inputIdentifier, newValue) {
    setDatos(prevDatos => {
      return {
        ...prevDatos,
        [inputIdentifier]: newValue
      };
    });
  }

  function deriveResult() {
    calculateInvestmentResults
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
