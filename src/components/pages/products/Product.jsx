"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Project3Data from '@/assets/jsonData/project/Project3Data.json'
import SingleProject3 from './SingleProject3';
import { PhotoProvider } from 'react-photo-view';
import axios from 'axios';
import InnerCta from '@/components/landingPage/InnerCta';

const Product = () => {



    const [activeTab, setActiveTab] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    const handleClick = (cat) => {
        setActiveTab(cat);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product-category-name`);
                setCategories(data);
                setActiveTab(data[0] || {}); // Set first category as default
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Marketing Services</h4>
                                    <div className="content">
                                        <ul>
                                            {categories.map((cat, index) => (

                                                <li
                                                    className={`${activeTab?.name === cat.name ? "current-item" : ""}`}>
                                                    <Link
                                                    href={""}
                                                        key={index}
                                                        onClick={() => handleClick(cat)}
                                                        disabled={activeTab?.name === cat.name}
                                                    >{cat.name}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <InnerCta />
                            </div>
                            <div className="col-xl-8 col-lg-7 clo-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <div id="gallery-masonary" className="gallery-items colums-3">
                                        <PhotoProvider
                                            speed={() => 800}
                                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                        >
                                            {activeTab?.products?.map(project =>
                                                <SingleProject3 project={project} key={project.id} />
                                            )}
                                        </PhotoProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Product;