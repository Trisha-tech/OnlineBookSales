import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="w-full max-w-5xl p-5 shadow-md rounded-lg mx-auto my-10 dark:bg-[rgb(40,40,40)]">
        <h1 className="text-center dark:text-white text-3xl md:text-4xl mb-6 md:mb-10">Contact Us</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="w-full max-w-xl md:max-w-2xl p-5 dark:text-white rounded-lg">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-bold mb-1 dark:text-white">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold mb-1 dark:text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-bold mb-1 dark:text-white">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="p-2 bg-blue-600 text-white rounded-md self-start hover:bg-blue-700">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
