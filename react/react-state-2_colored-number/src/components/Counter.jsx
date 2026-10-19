import ColoredNumber from "./ColoredNumber";

export default function Counter({
  OnHandleincrease,
  counter,
  OnHandleDecrease,
}) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={OnHandleincrease}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={OnHandleDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
