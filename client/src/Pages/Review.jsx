import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react';
import propic from '../assets/image/profile.jpg'; // Example image

import { Pagination, Autoplay} from 'swiper/modules';

function Review() {
    return (
        <div className='my-2 px-4 lg:px-24'>
            <h2 className='text-5xl dark:text-white font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    //implemented autoplay for auto-scrolling reviews
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: false, 
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination , Autoplay ]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "Absolutely love this book store! The selection is incredible and the delivery was fast. 
                                    The customer service team was so helpful in answering all my questions. I will definitely
                                    be purchasing from here again!"
                                </p>
                                <Avatar img={propic} alt="avatar of Jane Doe" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Jane Doe</h5>
                                <p className='text-base'>Marketing Manager, BookCo</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "Great experience overall! I found some rare editions that I had been searching for.
                                    The packaging was very secure, and the books arrived in perfect condition."
                                </p>
                                <Avatar img={propic} alt="avatar of John Smith" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>John Smith</h5>
                                <p className='text-base'>Book Collector</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "The variety and quality of books exceeded my expectations. The site is easy to navigate,
                                    and I quickly found what I was looking for. I will recommend this to all my friends!"
                                </p>
                                <Avatar img={propic} alt="avatar of Emily Johnson" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Emily Johnson</h5>
                                <p className='text-base'>Freelance Writer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "I've been buying books online for years, but this store really stands out. The discounts
                                    are fantastic and the delivery is always on time. The customer service is outstanding."
                                </p>
                                <Avatar img={propic} alt="avatar of Michael Davis" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Michael Davis</h5>
                                <p className='text-base'>CEO, ReadMore Inc.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "I ordered several books for my book club, and everyone loved them! The quality is great,
                                    and I especially appreciate the fast delivery. Will definitely order again."
                                </p>
                                <Avatar img={propic} alt="avatar of Sarah Lee" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Sarah Lee</h5>
                                <p className='text-base'>Book Club Organizer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white dark:bg-[rgb(30,30,30)] dark:text-white py-8 px-4 rounded-lg border flex flex-col justify-between' style={{ minHeight: '350px' }}>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Review text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    "The store is good, but I had an issue with one of my books arriving late. Other than that,
                                    everything was fine. Customer support was helpful."
                                </p>
                                <Avatar img={propic} alt="avatar of David Clark" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>David Clark</h5>
                                <p className='text-base'>Teacher, Literature Enthusiast</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Review;
