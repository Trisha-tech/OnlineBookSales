import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />{" "}
        {/* Adjusted route path */}
        <Route path="/login" element={<LoginPage />} />{" "}
        {/* Adjusted route path */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
