

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import { Header } from './components';
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />{" "}
        {/* Adjusted route path */}
        <Route path="/login" element={<LoginPage />} />{" "}
        {/* Adjusted route path */}
        <Route path="/product" element={<Product/>}/>
        <Route index element={<HomePage />} /> {/* Route for the Home page */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
