
import "./App.css";
import {Outlet} from "react-router-dom";
import { Header, Footer } from './Components/index.js';
import './Animations.css';

function App() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  );
}

export default App;
