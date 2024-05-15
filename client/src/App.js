
import {HomePage} from "./Components/index";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import { Header } from './Components';
import Product from "./Components/Product";

function App() {
  return (
    <>
       <Header />
      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route index element={<HomePage />} /> {/* Route for the Home page */}
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
