import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import handleSmoothScroll from '../../utilities/handleSmoothScroll';
import InnerCta from '@/components/landingPage/InnerCta';

const ServiceDetails = ({ serviceInfo, allServices }) => {
    

    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={`/assets/img/service/banner.jpg`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>title</h2>
                                <p>
                                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    {/* Remaining content */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Marketing Services</h4>
                                    <div className="content">
                                        <ul>
                                            {allServices.map(service => (
                                                <li key={service.id}>
                                                    <Link href={`/services/${service.id}`}>
                                                        {service.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <InnerCta />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;
