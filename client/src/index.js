import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext.js';
import { ToastContextProvider } from './Context/ToastContext.js';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store.js"
import { Provider } from 'react-redux';
import { SearchBarContextProvider } from './Context/SearchBarContext.js';
import { PriceFilterProvider } from './Context/PriceFilterContext.js';
import { FilterProvider } from './Context/filterContext.js';



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
  <Provider store={store}>
    <PriceFilterProvider>
  <SearchBarContextProvider>
    <FilterProvider>
  <AuthContextProvider>
    <ToastContextProvider>
        <App/>
    </ToastContextProvider>
  </AuthContextProvider>
  </FilterProvider>
  </SearchBarContextProvider>
  </PriceFilterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
