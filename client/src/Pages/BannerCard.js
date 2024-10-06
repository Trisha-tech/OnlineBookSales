import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6';
import { Pagination } from 'swiper/modules';
import './BannerCard.css';
function BannerCard({ headLine, books }) {
    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5'>{headLine}</h2>

            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className="relative">
                                    <img
                                        src={book.imageURL}
                                        alt={book.bookTitle}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded-full">
                                        <FaCartShopping className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-start pt-4">
                                    {/* Book Title and Author on the Left */}
                                    <div>
                                        <h4 className="text-md font-medium text-gray-800">{book.bookTitle}</h4>
                                        <p className="text-sm text-gray-600">{book.authorName}</p>
                                    </div>

                                    {/* Price on the Right */}
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">$10.00</p>
                                    </div>
                                </div>


                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-4"></div>
            </div>
        </div>
    );
}

export default BannerCard;
