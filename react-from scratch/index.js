import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>This is a React script!</h1>
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);