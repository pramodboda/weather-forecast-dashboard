import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CurrentTemp from "./components/cards/CurrentTemp";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Weather Forecast Dashboard</h2>
      <HomePage />
    </>
  );
}

export default App;
