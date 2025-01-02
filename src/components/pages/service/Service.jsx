"use client"
import React, { useEffect, useState } from 'react';
import SingleServices2 from './SingleServices2';
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
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: `url(/assets/img/shape/27.png)` }}>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {serviceData.slice(0, 6).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;