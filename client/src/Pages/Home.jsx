

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import B1Child from '../assets/image/B1Child.jpeg';
import AuthorImage from '../assets/image/author1.jpeg';
import Spinner from './Spinner';
import SearchBar from '../Components/SearchBar';
import Preloader from '../Components/Preloader';
import Newarrivals from './Newarrivals';
import Review from './Review';
import crawdadsImage from '../assets/image/WhereTheCrawdadsSings.jpg';
import TheMidnightLibrary from '../assets/image/theMidnightLibrary.jpg';
import TheVanishingHalf from '../assets/image/theVanishingHalf.jpg';
import Dune from '../assets/image/Dune.jpg';
import KlaraAndtheSun from '../assets/image/klaraAndtheSun.jpg';
import ProjectHailMary from '../assets/image/projectHailMary.jpg';
import MalibuRising from '../assets/image/malibuRising.jpg';



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
            {/* <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <Link to="/romance">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white ">Romance</h3>
                <p className="text-gray-600 dark:text-white">Explore our collection of romantic novels.</p>
              </div>
              </Link>
              
              <Link to = "/action">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-100 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Action</h3>
                <p className="text-gray-600 dark:text-white">Dive into thrilling action-packed stories.</p>
              </div>
              </Link>
              
              <Link to = "/thriller">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-200 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Thriller</h3>
                <p className="text-gray-600 dark:text-white">Get your adrenaline pumping with our thrillers.</p>
              </div>
              </Link>
              
              <Link to = "/fiction">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-300 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Fiction</h3>
                <p className="text-gray-600 dark:text-white" >Discover imaginative and captivating fiction.</p>
              </div>
              </Link>
              
              <Link to = "/tech">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-400 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Tech</h3>
                <p className="text-gray-600 dark:text-white">Stay updated with the latest in technology.</p>

              </div>
            </header>

            {/* Book Categories Section 
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


              <Link to = "/manga">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-600 dark:bg-[rgb(30,30,30)]">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Manga</h3>
                <p className="text-gray-600 dark:text-white">Explore our extensive collection of Manga.</p>
              </div>
              </Link>
            </div>
          </section> */}

            <section className="container mx-auto my-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">Book Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <Link to="/romance">
                  <div className="bg-gradient-to-r from-pink-200 to-red-200 dark:from-purple-700 dark:to-purple-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400 dark:hover:from-purple-600 dark:hover:to-purple-900">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Romance</h3>
                    <p className="text-gray-700 dark:text-gray-300">Explore our collection of romantic novels.</p>
                  </div>
                </Link>

                <Link to="/action">
                  <div className="bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-indigo-600 dark:to-blue-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-300 hover:to-indigo-300 dark:hover:from-indigo-500 dark:hover:to-blue-800">
                    <h3 className="text-xl font-bold mb-2 text-center">Action</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Dive into thrilling action-packed stories.</p>
                  </div>
                </Link>

                <Link to="/thriller">
                  <div className="bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-800 dark:to-black text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-500 dark:hover:from-gray-700 dark:hover:to-black">
                    <h3 className="text-xl font-bold mb-2 text-center">Thriller</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Get your adrenaline pumping with our thrillers.</p>
                  </div>
                </Link>

                <Link to="/fiction">
                  <div className="bg-gradient-to-r from-green-200 to-teal-200 dark:from-green-700 dark:to-teal-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-teal-300 dark:hover:from-green-600 dark:hover:to-teal-800">
                    <h3 className="text-xl font-bold mb-2 text-center">Fiction</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Discover imaginative and captivating fiction.</p>
                  </div>
                </Link>

                <Link to="/tech">
                  <div className="bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-700 dark:to-orange-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-300 dark:hover:from-yellow-600 dark:hover:to-orange-800">
                    <h3 className="text-xl font-bold mb-2 text-center">Tech</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Stay updated with the latest in technology.</p>
                  </div>
                </Link>

                <Link to="/philosophy">
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 dark:hover:from-purple-600 dark:hover:to-pink-800">
                    <h3 className="text-xl font-bold mb-2 text-center">Philosophy</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Dive deep into philosophical thoughts and ideas.</p>
                  </div>
                </Link>

                <Link to="/manga">
                  <div className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-700 dark:to-purple-900 text-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-300 dark:hover:from-pink-600 dark:hover:to-purple-800">
                    <h3 className="text-xl font-bold mb-2 text-center">Manga</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">Explore our extensive collection of Manga.</p>
                  </div>
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


<section className="container mx-auto my-8">
  <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">Top Trending Books</h2>
  <div className="overflow-x-auto">
    <div className="flex space-x-6">
      <Link to="/where-the-crawdads-sing">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-900 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={crawdadsImage} alt="Where the Crawdads Sing" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">Where the Crawdads Sing</h3>
          <p className="text-gray-600 dark:text-white">A coming-of-age story intertwined with a murder mystery set in the marshes of North Carolina.</p>
        </div>
      </Link>

      <Link to="/the-midnight-library">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1000 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={TheMidnightLibrary} alt="The Midnight Library" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">The Midnight Library</h3>
          <p className="text-gray-600 dark:text-white">A philosophical tale about choices, regrets, and the infinite possibilities of life.</p>
        </div>
      </Link>

      <Link to="/the-vanishing-half">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1100 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={TheVanishingHalf} alt="The Vanishing Half" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">The Vanishing Half</h3>
          <p className="text-gray-600 dark:text-white">A multigenerational saga about twin sisters whose lives diverge when one decides to live as a white woman.</p>
        </div>
      </Link>

      <Link to="/dune">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1200 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={Dune} alt="Dune" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">Dune</h3>
          <p className="text-gray-600 dark:text-white">A science fiction epic set on the desert planet of Arrakis, exploring themes of politics, religion, and ecology.</p>
        </div>
      </Link>

      <Link to="/klara-and-the-sun">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1300 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={KlaraAndtheSun} alt="Klara and the Sun" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">Klara and the Sun</h3>
          <p className="text-gray-600 dark:text-white">A story told from the perspective of an artificial friend, exploring themes of love and what it means to be human.</p>
        </div>
      </Link>

      <Link to="/project-hail-mary">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1400 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={ProjectHailMary} alt="Project Hail Mary" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">Project Hail Mary</h3>
          <p className="text-gray-600 dark:text-white">A gripping tale of survival in space as an astronaut embarks on a mission to save humanity.</p>
        </div>
      </Link>

      <Link to="/malibu-rising">
        <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 delay-1500 dark:bg-[rgb(30,30,30)] w-64 flex flex-col hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800">
          <img src={MalibuRising} alt="Malibu Rising" className="mb-4 h-54 w-full object-cover rounded-md" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">Malibu Rising</h3>
          <p className="text-gray-600 dark:text-white">A summer story of four siblings throwing a party that changes everything, set in Malibu's vibrant beach culture.</p>
        </div>
      </Link>
    </div>
  </div>
</section>
            {/* Featured Author Section */}
            <section className="container mx-auto my-8 ">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Featured Author</h2>

              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center dark:bg-[rgb(30,30,30)]">
                <img
                  src={data.featuredAuthor.image}
                  alt={data.featuredAuthor.name}
                  className="w-32 h-32 object-cover rounded-full shadow-lg mr-6"
                />
                <div>

                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{data.featuredAuthor.name}</h3>
                  <p className="text-gray-600 dark:text-white">{data.featuredAuthor.bio}</p>
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
