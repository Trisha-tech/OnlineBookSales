import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useAuth } from '../Context/AuthContext';
import { updateUserCart } from "../redux/Slices/CartSlice";
import {jwtDecode} from 'jwt-decode';
import axios from "axios";
import Spinner from "../Components/Spinner";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCartData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem('token');
      } else {
        try {
          const response = await axios.get("http://localhost:8080/customer/cart", {
            headers: { 'token': token }
          });
          const updatedCart = response.data.cartItems;
          dispatch(updateUserCart(updatedCart));
        } catch (error) {
          console.error("Error updating user cart:", error);
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userLoggedIn) {
      fetchCartData();
    } else {
      setLoading(false);
    }
  }, [dispatch, userLoggedIn]);

  useEffect(() => {
    if (!loading) {
      setTotalAmount(cart.reduce((acc, curr) => acc + (curr.productDetails?.price || 0), 0));
    }
  }, [cart, loading]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {userLoggedIn ? (
            cart.length > 0 ? (
              <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                  {cart.map((item, index) => (
                    <CartItem key={item.productDetails._id} item={item.productDetails} itemIndex={index} fetchCartData={fetchCartData} />
                  ))}
                </div>
                <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
                  <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
                    <div className="flex flex-col gap-5">
                      <div className="font-semibold text-xl text-green-800">Your Cart</div>
                      <div className="font-semibold text-5xl text-green-700 -mt-5">Summary</div>
                      <p className="text-xl">
                        <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">
                      <span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}
                    </p>
                    <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                      CheckOut Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
                <Link to={"/shop"}>
                  <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                    Shop Now
                  </button>
                </Link>
              </div>
            )
          ) : (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semibold text-xl mb-2">Please Login First!</h1>
              <Link to={"/login"}>
                <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                  Login Now
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
