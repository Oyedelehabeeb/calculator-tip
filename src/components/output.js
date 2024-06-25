export default function Output({ billInput, tip, onReset }) {
  const total = billInput * (tip / 100) + billInput;
  return (
    <div>
      {billInput > 0 && (
        <>
          <h1>
            You pay ${total.toFixed(2)} (${billInput.toFixed(2)} + {tip}%)
          </h1>
          <button onClick={onReset}>Reset</button>
        </>
      )}
    </div>
  );
}
