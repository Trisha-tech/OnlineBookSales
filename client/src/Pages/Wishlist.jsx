import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishListItem from "../Components/WishListItem";
import { useAuth } from '../Context/AuthContext';

const Wishlist = () => {
  const WishList = useSelector((state) => state.WishList);
  const { userLoggedIn } = useAuth();

  return (
    <div>
      {userLoggedIn ? (
        WishList.length > 0 ? (
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {WishList.map((item, index) => (
                <WishListItem key={item._id} item={item} itemIndex={index} />
              ))}
            </div>

            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
                <div className="flex flex-col gap-5">
                  <div className="font-semibold text-xl text-green-800">Your Wishlist</div>
                  <div className="font-semibold text-5xl text-green-700 -mt-5">Summary</div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">Total Items: {WishList.length}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your wishlist is empty!</h1>
            <Link to={"/"}>
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                Shop Now
              </button>
            </Link>
          </div>
        )
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Please Login First!</h1>
          <Link to="/login">
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Login Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
