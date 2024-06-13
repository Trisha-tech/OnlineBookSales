import React from 'react';
import B1Child from '../assets/image/B1Child.jpeg'; 
import BookDetail from './BookDetail';
const Home = () => {

  // add object to add new book
  const bookCategories = [
      { 
        subject : 'Romance',
        title : 'Explore our collection of romantic novels.'
      },

      { 
        subject : 'Fiction',
        title : 'Discover imaginative and captivating fiction.'
      },
      { 
        subject : 'Tech',
        title : 'Stay updated with the latest in technology.'
      },
      { 
        subject : 'Philosophy',
        title : 'Dive deep into philosophical thoughts and ideas.'
      },
      { 
        subject : 'Manga',
        title : 'Explore our extensive collection of Manga.'
      }
  ]
  // add object to add new top new arrive book
  const new_arrive = [
    {
      subject : 'Book Title 1', 
      title : 'Coming Soon'
    },
    {
      subject : 'Book Title 2', 
      title : 'Coming Soon'
    }
  ]

// add object to add new top trending book
  const top_trending = [
    {
      subject : 'Trending Book 1', 
      title : 'Description of the trending book.'
    },
    {
      subject : 'Trending Book 2', 
      title : 'Description of the trending book.'
    }
  ]

  return (
    <div className="bg-gray-100">
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
          <BookDetail data={bookCategories} />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BookDetail data={new_arrive}/>
          </div>
        </div>
      </section>

      {/* Top Trending Books Section */}
      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Trending Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BookDetail data={top_trending}/>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
