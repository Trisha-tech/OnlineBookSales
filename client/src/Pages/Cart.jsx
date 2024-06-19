import { useState } from "react";
import Spinner from "./Spinner";
function Cart(){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    return(  
        <div>
            this will contain information related to carts.
            <Spinner/>
        </div>
    )
}

export default Cart;