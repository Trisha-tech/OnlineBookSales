import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {  HomePage, Product, ProfilePage } from "./Components/index"
import LoginPage from "./Pages/LoginPage.jsx"
import SignUpPage from "./Pages/SignUpPage.jsx"
import BookStorePage from './Pages/BookStorePage.jsx';
import OrderPage from './Pages/OrderPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage/>
      },
      {
        path:"/bookstore",
        element:<BookStorePage />
      },
      {
        path:'/order',
        element:<OrderPage />
      },

      {
        path: "/signup",
        element: <SignUpPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/product",
        element: <Product/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
