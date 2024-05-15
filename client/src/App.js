
import "./App.css";
import {Outlet} from "react-router-dom";
import { Header } from './Components/index.js';

function App() {
  return (
    <>
    <Header />
      <Outlet />
    </>
  );
}

export default App;
