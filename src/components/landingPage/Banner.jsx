"use client";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import SingleBanner1 from './SingleBanner1';
import Banner1Data from '@/assets/jsonData/banner/Banner1Data.json';

const Banner = () => {
    const [banner, setBanner]=useState([]);
    const [loading, setLoading]=useState([]);

    useEffect(() => { 
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/hero_list`
            );
            setBanner(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="banner-area banner-style-one shadow navigation-custom-large zoom-effect overflow-hidden text-light">
                <div className="banner-fade">
                    <Swiper
                        modules={[Keyboard, Autoplay, Pagination, EffectFade]}
                        direction={"horizontal"}
                        autoplay={true}
                        loop={true}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                    >
                        <div className="swiper-wrapper">
                            {banner.map(banner =>
                                <SwiperSlide key={banner.id} className='banner-style-one'>
                                    <SingleBanner1 banner={banner} />
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    );
};

export default Banner;