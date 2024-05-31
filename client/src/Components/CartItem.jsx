import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex, fetchCartData }) => {
  const dispatch = useDispatch();

  const remove_From_Cart = async () => {
    await dispatch(removeFromCart(item._id));
    toast.success("Item Removed");
    fetchCartData(); // Fetch updated cart data
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover" src={item.images.url} alt="image" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.name}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.author}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{item.price}</p>
            <div
              className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={remove_From_Cart}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
