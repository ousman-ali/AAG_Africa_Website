"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial2Data from '@/assets/jsonData/testimonial/Testimonial2Data.json'
import SingleTestimonial2 from './SingleTestimonial2';

const Testimonial = () => {
    const [testimonials, setTestimonialData] = useState([]);
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
        <>
            <div className="testimonials-style-two-area bg-dark default-padding-top half-shape-light-bottom"
                style={{ backgroundImage: `url(/assets/img/shape/34.png)` }}>
                <div className="container">
                    <div className="row">
                       
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <div className="testimonial-style-two-carousel swiper">
                            <Swiper
                                modules={[Keyboard, Autoplay, Pagination]}
                                freeMode={true}
                                grabCursor={true}
                                autoplay={false}
                                centeredSlides={true}
                                initialSlide={1}
                                slidesPerView={1}
                                loop={true}
                                spaceBetween={50}
                                keyboard={{
                                    enabled: true,
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 2.5,
                                    }
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {testimonials.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonial2 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;