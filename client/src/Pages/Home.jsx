import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import B1Child from "../assets/image/B1Child.jpeg";
import AuthorImage from "../assets/image/author1.jpeg";
import Spinner from "./Spinner";
import SearchBar from "../Components/SearchBar";
import Preloader from "../Components/Preloader";
import Newarrivals from "./Newarrivals";
import Review from "./Review";
import Trending from "../Components/Trending";
import Book from "../Components/Card/Book";
import Review from './Review';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        featuredAuthor: {
          name: "John Doe",
          bio: "John Doe is a bestselling author known for his thrilling novels and captivating storytelling.",
          image: AuthorImage,
        },
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Implement search logic here
  };

  return (
    <>
      <Preloader />
      <div className="bg-gray-100 dark:bg-[rgb(51,51,51)]">
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Image Container */}
            <header className="bg-white shadow dark:bg-inherit">
              <div className="container mx-auto p-6">
                <img
                  src={B1Child}
                  alt="Book Store"
                  className="w-full max-h-[720px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </header>

            {/* Book Categories Section */}
            <section className="container mx-auto my-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Book Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/romance">

                  <Book
                    genre="Romance"
                    description="Explore our collection of romantic novels."
                  />

                </Link>

                <Link to="/action">
                  <Book
                    genre="Action"
                    description="Dive into thrilling action-packed stories."
                  />
                </Link>

                <Link to="/thriller">
                  <Book
                    genre="Thriller"
                    description="Get your adrenaline pumping with our thrillers."
                  />
                </Link>

                <Link to="/fiction">
                  <Book
                    genre="Fiction"
                    description="Discover imaginative and captivating fiction."
                  />
                </Link>

                <Link to="/tech">
                  <Book
                    genre="Tech"
                    description="Stay updated with the latest in technology."
                  />
                </Link>

                <Link to="/philosophy">
                  <Book
                    genre="Philosophy"
                    description="Dive deep into philosophical thoughts and ideas."
                  />
                </Link>

                <Link to="/manga">
                  <Book
                    genre="Manga"
                    description="Explore our extensive collection of Manga."
                  />
                </Link>
              </div>
            </section>

            {/* New Arrivals Section */}
            <section className="bg-gray-200 py-8 dark:bg-[rgb(40,40,40)]">
              <div className="container mx-auto ">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                  New Arrivals
                </h2>

                <Newarrivals />
              </div>
            </section>

            {/* Top Trending Books Section */}

            {/* <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Top Trending Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-900 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Trending Book 1</h3>
                <p className="text-gray-600 dark:text-white">Description of the trending book.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1000 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Trending Book 2</h3>
                <p className="text-gray-600 dark:text-white">Description of the trending book.</p>
              </div>
            </div>
          </section> */}

            <section className="bg-gray-200 py-8 dark:bg-[rgb(40,40,40)]">
              <div className="container mx-auto ">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                  Trending
                </h2>

                <Trending />

              </div>
            </section>

            {/* Featured Author Section */}
            <section className="container mx-auto my-8 ">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Featured Author
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center dark:bg-[rgb(30,30,30)]">
                <img
                  src={data.featuredAuthor.image}
                  alt={data.featuredAuthor.name}
                  className="w-32 h-32 object-cover rounded-full shadow-lg mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">
                    {data.featuredAuthor.name}
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    {data.featuredAuthor.bio}
                  </p>
                </div>
              </div>
            </section>

            <Review />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
