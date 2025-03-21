export default function SelectPercentage2({ percentage2, onPercentage2 }) {
  return (
    <div>
      <label>How did your friend like the service?</label>
      <select
        value={percentage2}
        onChange={(e) => onPercentage2(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
