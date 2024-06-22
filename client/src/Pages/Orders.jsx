import { useState } from "react";
import Spinner from "./Spinner";

function Orders(){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    return(
        <div>
            this will contain information related to Orders.
            <Spinner/>
        </div>
    )
}

export default Orders;