import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CurrentTemp from "./components/cards/CurrentTemp";
import HomePage from "./pages/HomePage";


//Context
import { ColorModeContextProvider } from "./context/ColorModeContext.jsx";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorModeContextProvider>
      
      <HomePage />
      </ColorModeContextProvider>
    </>
  );
}

export default App;
