import { useState } from "react";
import Result from "./Result";
import Radio from "./Radio";
import "./style.css";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState();
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz jedną walutę</legend>
        <p>
          <label className="form__label">
            Podaj kwotę w PLN: <input
              type="number"
              step="0.01"
              min="0.01"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wprowadź wartość" />
          </label>
        </p>

        <Radio
          setCurrency={setCurrency}
          currency={currency} />

        <Result result={result} />

        <button className="form__button">Przelicz!</button>
        <button type="reset" className="form__button">Wyczyść</button>

      </fieldset>
    </form>
  )
};

export default Form;