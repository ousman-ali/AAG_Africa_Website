'use client';
import React, { useEffect, useState } from 'react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial2Data from '@/assets/jsonData/testimonial/Testimonial2Data.json';
import SingleTestimonial2 from './SingleTestimonial2';
import axios from 'axios';

const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial-list`
                );
                setTestimonialData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching service data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="testimonials-style-two-area bg-dark default-padding-top half-shape-light-bottom"
            style={{ backgroundImage: `url(/assets/img/shape/34.png)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-light text-center">
                            <h4 className="sub-heading">Testimonials</h4>
                            <h2 className="title">Clients Feedback</h2>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fill">
                <div className="row">
                    <div className="testimonial-style-two-carousel swiper">
                        <Swiper
                            modules={[Keyboard, Autoplay, Pagination]}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            spaceBetween={20}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: false,
                            }}
                            breakpoints={{
                                320: { // For mobile devices
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: { // For tablets
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: { // For larger screens
                                    slidesPerView: 3, // Ensure three cards are visible
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {testimonialData.map(testimonial => (
                                <SwiperSlide key={testimonial.id}>
                                    <SingleTestimonial2 testimonial={testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
