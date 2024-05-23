import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Card/ProductCard";
import SearchBar from "../Components/SearchBar";
import PriceFilter from "../Components/PriceFilter";
import { useSearchBar } from "../Context/SearchBarContext";
import { usePriceFilter } from "../Context/PriceFilterContext";

const Shop = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const { searchBarTerm } = useSearchBar();
    const { minPrice, maxPrice } = usePriceFilter();

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        } catch (error) {
            console.log("Error aagya ji");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchBarTerm.toLowerCase())
    ).filter((post) => {
        const price = parseFloat(post.price);
        return price >= minPrice && price <= maxPrice;
    });

    return (
        <div>
            <div className="flex  md:justify-between md:flex-row flex-col gap-4">
            <SearchBar />
            <PriceFilter />
            </div>
            {loading ? (
                <Spinner />
            ) : filteredPosts.length > 0 ? (
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {filteredPosts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                </div>
            )}
        </div>
    );
};

export default Shop;
