import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  function OnHandleincrease() {
    setCounter(counter + 1);
  }

  function OnHandleDecrease() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <Counter
      OnHandleincrease={OnHandleincrease}
      OnHandleDecrease={OnHandleDecrease}
      counter={counter}
    />
  );
}
