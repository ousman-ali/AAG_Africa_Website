"use client"
import Link from 'next/link';
import React from 'react';
import Project3Data from '@/assets/jsonData/project/Project3Data.json'
import SingleProject3 from './SingleProject3';
import { PhotoProvider } from 'react-photo-view';

const Product = () => {
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
                                            <li><Link href="#">Email Marketing</Link></li>
                                            <li className="current-item"><Link href="#">Growth Hacking</Link></li>
                                            <li><Link href="#">Lead Generation</Link></li>
                                            <li><Link href="#">Offline SEO</Link></li>
                                            <li><Link href="#">Social Media Marketing</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/14.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                                        </p>
                                        <h2><a href="tel:+(012) 6679545">+(012) 6679545</a></h2>
                                        <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div>

                              

                            </div>
                             <div className="col-xl-8 col-lg-7 clo-md-12 gallery-content">
        <div className="magnific-mix-gallery gallery-masonary">
            <div id="gallery-masonary" className="gallery-items colums-3">
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    {Project3Data.map(project =>
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