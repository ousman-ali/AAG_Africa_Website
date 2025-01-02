"use client"
import React, { useEffect, useState } from 'react';
import SingleServices4 from './SingleServices4';
import axios from 'axios';

const Service = () => {

    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/service`
                );
                setServiceData(data);
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
            <div className="services-style-four-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">What we do</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {serviceData.slice(-3).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices4 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;