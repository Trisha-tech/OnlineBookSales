import { useState } from "react";
import Spinner from "./Spinner";

function Wishlist(){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    return(
        <div>
            This will contain all information related to userwishlist.
            <Spinner/>
        </div>
    )
}

export default Wishlist;