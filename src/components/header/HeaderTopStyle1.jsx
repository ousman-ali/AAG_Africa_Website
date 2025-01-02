"use client"
import React, { useEffect, useState } from 'react';
import SocialShare from '../utilities/SocialShare';
import axios from 'axios';

const HeaderTopStyle1 = () => {

    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState({});

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`);
                setContact(data);
            } catch (error) {
                console.error("Error fetching services data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetails();
    }, []);
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
                            <ul className="item-flex">
                                {contact?.address&&(<li>
                                    <i className="fas fa-map-marker-alt"></i> {contact.address}
                                </li>)}
                                {contact?.phone1&&(<li>
                                    <a href={`tel:${contact.phone1}`}><i className="fas fa-phone-alt"></i> {contact.phone1}</a>
                                </li>)}
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle1;