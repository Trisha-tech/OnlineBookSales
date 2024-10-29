import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext.js';
import { ToastContextProvider } from './Context/ToastContext.js';
import reportWebVitals from './reportWebVitals';




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//       {
//         path: '/orders',
//         element: <Orders />,
//       },
//       {
//         path: '/profile',
//         element: <ProfilePage />,
//       },
//       {
//         path: '/signup',
//         element: <SignUpPage />,
//       },
//       {
//         path: '/login',
//         element: <LoginPage />,
//       },
//       {
//         path: '/product',
//         element: <Product />,
//       },
//       {
//         path: '/wishlist',
//         element: <Wishlist />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AuthContextProvider>
    <ToastContextProvider>
      <App/>
    </ToastContextProvider>
   </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
