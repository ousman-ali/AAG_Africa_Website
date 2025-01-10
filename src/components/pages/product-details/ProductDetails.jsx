import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';

import Link from 'next/link';
import handleSmoothScroll from '../../utilities/handleSmoothScroll';

const ProductDetails = ({ serviceInfo, allService }) => {


    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${serviceInfo?.banner}`} alt="Thumb" width={1460} height={782} objectFit='cover' />
                                </div>
                                <h2>{serviceInfo?.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: serviceInfo?.description }} >
                                    
                                </p>
                                <div className="features mt-10 mt-xs-30 mb-30 mb-xs-20">
                                    <p dangerouslySetInnerHTML={{ __html: serviceInfo?.details }} />
                                </div>
                                

                              

                                
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">related Products</h4>
                                    <div className="content">
                                        <ul>
                                            <li><Link href="#">Email Marketing</Link></li>
                                            <li className="current-item"><Link href="#">Growth Hacking</Link></li>
                                            <li><Link href="#">Lead Generation</Link></li>
                                            <li><Link href="#">Offline SEO</Link></li>
                                            <li><Link href="#">Social Media Marketing</Link></li>
                                        </ul>
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

export default ProductDetails;