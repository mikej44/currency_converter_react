import { useState } from "react";
import Result from "./Result";

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

        <ul className="form__radioList" value={currency} onChange={({ target }) => setCurrency(target.value)}>
          <li className="form__item">
            <label>
              <input type="radio" name="currency" value="EUR" required />  EUR
            </label>
          </li>
          <li className="form__item">
            <label>
              <input type="radio" name="currency" value="USD" required /> USD
            </label>
          </li>
          <li className="form__item">
            <label>
              <input type="radio" name="currency" value="CHF" required /> CHF
            </label>
          </li>
        </ul>

        <button className="form__button">Przelicz!</button>
        <button type="reset" className="form__button">Wyczyść</button>

        <Result result={result} />
      </fieldset>
    </form>
  )
};

export default Form;