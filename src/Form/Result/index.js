import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                <b>&nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</b>
            </>
        )}
    </p>
);

export default Result;
