import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increased = () => {
    setCount(count + 1);
    console.log("🤔");
  };

  const decreased = () => {
    setCount(count - 1);
    console.log("🤔");
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={decreased}>
          -
        </button>
        <button type="button" onClick={increased}>
          +
        </button>
      </div>
    </div>
  );
}
