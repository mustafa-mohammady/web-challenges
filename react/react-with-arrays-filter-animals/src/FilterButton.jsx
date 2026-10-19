import React from "react";

export default function FilterButton({ habit, selectedHabit, handleFilter }) {
  return (
    <button
      className="button"
      type="button"
      style={{
        backgroundColor: selectedHabit == habit ? "lightblue" : "",
      }}
      onClick={() => handleFilter({ habit })}
    >
      {habit}
    </button>
  );
}
