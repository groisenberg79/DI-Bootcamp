import { useState } from "react";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sum, setSum] = useState(0);

  const addNumbers = () => {
    setSum(Number(count1) + Number(count2));
  };

  return (
    <>
      <div className="addition-box">
        <h2>Adding Two Numbers</h2>
        <input
          onChange={(event) => setCount1(event.target.value)}
          type="number"
          name="first"
          id="first"
        />
        <input
          onChange={(event) => setCount2(event.target.value)}
          type="number"
          name="second"
          id="second"
        />
        <br />

        <button onClick={() => addNumbers()}>add them!</button>

        <br />

        <h3>{sum}</h3>
      </div>
    </>
  );
}

export default App;
