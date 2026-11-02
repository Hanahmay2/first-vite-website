import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import * as d3 from "d3";

const data = [4, 8, 15, 16, 23, 42];
console.log("Max:", d3.max(data));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Hello! </h1>
      <h2>How are you? </h2>
    </>
  );
}

export default App;
