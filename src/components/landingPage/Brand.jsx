'use client';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo1 from '@/assets/img/logo/1.png'
import logo2 from '@/assets/img/logo/2.png'
import logo4 from '@/assets/img/logo/4.png'
import logo5 from '@/assets/img/logo/5.png'
import logo6 from '@/assets/img/logo/6.png'
import logo7 from '@/assets/img/logo/7.png'
import Image from 'next/image';

const Brand = ({ sectionClass }) => {
    const [brand, setBrand] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/partners-list`);
                setBrand(data);
            }   catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }
    , []);
    return (
        <>
            <div className={`partner-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="partner-map" style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}>
                                <h2 className="mask-text" style={{ backgroundImage: `url(/assets/img/brand.jpg)` }}>22</h2>
                                <h4>Partners in world wide</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="partner-items">
                                <ul>
                                    {brand.slice(0, 6).map(brand => <li key={brand.id}> <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${brand.banner}`} width={100} height={60} alt="Image Not FOund" /> </li>)}
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brand;