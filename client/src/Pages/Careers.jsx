import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <>
        <Preloader />
        <div className="bg-blue-50 py-20 dark:bg-[rgb(51,51,51)] min-h-screen">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg dark:bg-[rgb(40,40,40)]">
                <div className="p-10">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
                    Careers
                </h2>
                <p className="text-2xl text-center dark:text-gray-200">Sorry we have no career openings right now!!!</p>
                </div>
            </div>
            </div>
        </div>
        </>
      );
}

export default Careers