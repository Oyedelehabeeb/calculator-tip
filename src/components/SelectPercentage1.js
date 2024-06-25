export default function SelectPercentage1({ percentage1, onPercentage1 }) {
  return (
    <div>
      <label>How much do you like the service?</label>
      <select
        value={percentage1}
        onChange={(e) => onPercentage1(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
