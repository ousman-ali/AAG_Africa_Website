"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Project3Data from '@/assets/jsonData/project/Project3Data.json'
import SingleProject3 from './SingleProject3';
import { PhotoProvider } from 'react-photo-view';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products-list`);
                setProducts(data.slice(0, 6));
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
            <div className="project-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h4 className="sub-heading">Recent Products</h4>
                                
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <div id="gallery-masonary" className="gallery-items colums-3">
                                        <PhotoProvider
                                            speed={() => 800}
                                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                        >
                                            {products.map(project =>
                                                <SingleProject3 project={project} key={project.id} />
                                            )}
                                        </PhotoProvider>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-info secondary text-center mt-60">
                                            <p>
                                                Are you interested to show more products? <Link href="/product" scroll={false}>Load More</Link>
                                            </p>
                                        </div>
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