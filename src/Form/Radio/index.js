import { currencies } from './currencies';
import "./style.css";

const Radio = ({ setCurrency, currency }) => (
    <ul value={currency} onChange={({ target }) => setCurrency(target.value)}>
        {currencies.map((currency) => (
            <li className="radio__item" key={currency.short}>
                <label>
                    <input type="radio" name="currency" value={currency.short} required /> {currency.short}
                </label>
            </li>
        ))}
    </ul>
);

export default Radio;