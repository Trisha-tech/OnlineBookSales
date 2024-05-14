import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/Home"; 
import Shop from './Pages/Shop';
import BookDetails from './Components/BookDetails/BookDetails'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<HomePage />} /> {/* Route for the Home page */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bookdetails" element={<BookDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
