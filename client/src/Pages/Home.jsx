import React, { useState, useEffect } from 'react';
import B1Child from '../assets/image/B1Child.jpeg'; 
import AuthorImage from '../assets/image/author1.jpeg'
import Spinner from './Spinner';
import SearchBar from './SearchBar'; // Import the SearchBar component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a fetch call to backend
    setTimeout(() => {
      setData({
        featuredAuthor: {
          name: "John Doe",
          bio: "John Doe is a bestselling author known for his thrilling novels and captivating storytelling.",
          image: AuthorImage
        }
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement search logic here
  };

  return (
    <div className="bg-gray-100">
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Image Container */}
          <header className="bg-white shadow">
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500">
                <h3 className="text-xl font-bold mb-2">Romance</h3>
                <p className="text-gray-600">Explore our collection of romantic novels.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-100">
                <h3 className="text-xl font-bold mb-2">Action</h3>
                <p className="text-gray-600">Dive into thrilling action-packed stories.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-200">
                <h3 className="text-xl font-bold mb-2">Thriller</h3>
                <p className="text-gray-600">Get your adrenaline pumping with our thrillers.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-300">
                <h3 className="text-xl font-bold mb-2">Fiction</h3>
                <p className="text-gray-600">Discover imaginative and captivating fiction.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-400">
                <h3 className="text-xl font-bold mb-2">Tech</h3>
                <p className="text-gray-600">Stay updated with the latest in technology.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-500">
                <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                <p className="text-gray-600">Dive deep into philosophical thoughts and ideas.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-600">
                <h3 className="text-xl font-bold mb-2">Manga</h3>
                <p className="text-gray-600">Explore our extensive collection of Manga.</p>
              </div>
            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="bg-gray-200 py-8">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">New Arrivals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-700">
                  <h3 className="text-xl font-bold mb-2">Book Title 1</h3>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-800">
                  <h3 className="text-xl font-bold mb-2">Book Title 2</h3>
                  <p className="text-gray-600">Latest Edition</p>
                </div>
                {/* Add more books as needed */}
              </div>
            </div>
          </section>

          {/* Top Trending Books Section */}
          <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Trending Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-900">
                <h3 className="text-xl font-bold mb-2">Trending Book 1</h3>
                <p className="text-gray-600">Description of the trending book.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1000">
                <h3 className="text-xl font-bold mb-2">Trending Book 2</h3>
                <p className="text-gray-600">Description of the trending book.</p>
              </div>
              {/* Add more trending books as needed */}
            </div>
          </section>

          {/* Featured Author Section */}
          <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Author</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <img 
                src={data.featuredAuthor.image} 
                alt={data.featuredAuthor.name} 
                className="w-32 h-32 object-cover rounded-full shadow-lg mr-6" 
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{data.featuredAuthor.name}</h3>
                <p className="text-gray-600">{data.featuredAuthor.bio}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
