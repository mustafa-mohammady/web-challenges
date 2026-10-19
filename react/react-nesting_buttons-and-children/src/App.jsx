import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        <h1>First Button</h1>
      </Button>
      <Button>
        <h1>Second Button</h1>
      </Button>
      <Button>
        <h1>Third Button</h1>
      </Button>
      <Button>
        <h1>Fourth Button</h1>
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
