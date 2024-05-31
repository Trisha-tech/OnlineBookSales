import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Card/ProductCard";
import SearchBar from "../Components/SearchBar";
import PriceFilter from "../Components/PriceFilter";
import { useSearchBar } from "../Context/SearchBarContext";
import { usePriceFilter } from "../Context/PriceFilterContext";
import { useFilter } from "../Context/filterContext";

const Shop = () => {
    const API_URL = "http://localhost:8080/product/getAllProducts";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const { searchBarTerm } = useSearchBar();
    const { minPrice, maxPrice } = usePriceFilter();
    const { filter, setFilter } = useFilter(); // Access the filter context and setter function

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            console.log(Array.isArray(data.products));
            setPosts(data.products);
        } catch (error) {
            console.log("Error occurred while fetching data");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const name = post.name.toLowerCase().includes(searchBarTerm.toLowerCase());
        const priceMatch = post.price >= minPrice && post.price <= maxPrice;
        const categoryMatch = post.category === filter; // Assuming the category field is used for filtering
        return name && priceMatch && categoryMatch;
    });

    return (
        <div>
            <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <SearchBar />
                <PriceFilter />
                {/* Filter Buttons */}
                <div className="flex gap-2">
                    <Button
                        variant={filter === 'Action' ? 'contained' : 'outlined'}
                        onClick={() => setFilter('Action')}
                    >
                        Action
                    </Button>
                    <Button
                        variant={filter === 'Romance' ? 'contained' : 'outlined'}
                        onClick={() => setFilter('Romance')}
                    >
                        Romance
                    </Button>
                    {/* Add more buttons for other categories */}
                </div>
            </div>
            {loading ? (
                <Spinner />
            ) : filteredPosts.length > 0 ? (
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {filteredPosts.map((post) => (
                        <Product key={post._id} post={post} />
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
