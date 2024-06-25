import { useState } from "react";

import SelectPercentage1 from "./SelectPercentage1";
import SelectPercentage2 from "./selectPercentage2";
import BillInput from "./BillInput";
import Output from "./output";

function App() {
  function handleBillInput(input) {
    setBillInput(input);
  }

  const [billInput, setBillInput] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (percentage1 + percentage2) / 2;

  function handleReset() {
    setBillInput("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput billInput={billInput} onBillInput={handleBillInput} />
      <SelectPercentage1
        percentage1={percentage1}
        onPercentage1={setPercentage1}
      />
      <SelectPercentage2
        percentage2={percentage2}
        onPercentage2={setPercentage2}
      />
      <Output billInput={billInput} tip={tip} onReset={handleReset} />
    </div>
  );
}

export default App;
