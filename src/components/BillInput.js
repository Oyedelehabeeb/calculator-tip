export default function BillInput({ billInput, onBillInput }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={billInput}
        onChange={(e) => onBillInput(Number(e.target.value))}
      />
    </div>
  );
}
