import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import Prueba from "./pages/Prueba/Prueba";

function App() {
  // const [usuario, setUsuario] = useState(null);

  return (
    <>
      {/* <div>{usuario ? <Prueba /> : <LoginPage />}</div> */}
      <div>
        <LoginPage />
      </div>
    </>
  );
}

export default App;
