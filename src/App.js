import { useState } from 'react';
import { currencies } from './currencies';
import Form from "./Form";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: +amount / rate,
      currency,
    });
  };

  const resetResult = () => {
    setResult();
  };

  return (
    <div className="converter">
      <Form
        result={result}
        calculateResult={calculateResult}
        resetResult={resetResult}
      />
    </div>
  );
}

export default App;
