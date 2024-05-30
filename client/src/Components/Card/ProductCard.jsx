import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addToCart,removeFromCart } from "../../redux/Slices/CartSlice";
import { Like, dislike } from "../../redux/Slices/WishListSlice";

const Product = (props) => {

 const post=props.post;
 console.log(post);
 const cart = useSelector((state) => state.cart);
 const WishList = useSelector((state) => state.WishList);
 
  const dispatch = useDispatch();

  // Check if the item is already liked
  const isLiked = WishList.some((item) => item._id === post._id);
  const [like, setLike] = useState(isLiked);

  const add_to_Cart =() => {
    // dispatch(add(post));
    dispatch(addToCart(post));
    toast.success("Item added to Cart");
  };

  const remove_from_cart =  () => {
    dispatch(removeFromCart(post._id));
    toast.error("Item removed from Cart");
  };

  const toggleLike = () => {
    if (like) {
      dispatch(dislike(post._id));
      toast.error("Item removed from Wishlist");
    } else {
      dispatch(Like(post));
      toast.success("Item added to Wishlist");
    }
    setLike(!like);
  };

  return (
    <div className="relative flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      
      <div className="absolute top-4 right-4">
        <AiFillHeart
          size={25}
          onClick={toggleLike}
          className={`${like ? "text-red-600" : "text-gray-400"} transition duration-300 cursor-pointer`}
        />
      </div>
      
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.name}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.images[0].url} className="h-full w-full" alt={post.title} />
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.author}</p>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p._id === post._id) ? (
          <button
            className="text-white border-2 
            bg-red-600 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={remove_from_cart}>
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-green-700
            hover:text-white transition duration-300 ease-in"
            onClick={add_to_Cart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
