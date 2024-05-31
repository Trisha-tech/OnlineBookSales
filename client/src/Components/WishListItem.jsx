
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { dislike } from "../redux/Slices/WishListSlice";
import { toast } from "react-hot-toast";

const WishListItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const dislikeItem = () => {
    dispatch(dislike(item._id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.images[0].url} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.name}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.author}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{item.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={dislikeItem}>
              <AiFillDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default WishListItem;
