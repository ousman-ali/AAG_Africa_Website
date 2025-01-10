import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';

import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

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
                                <h3>What we do?</h3>
                                <p>
                                    Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted.
                                </p>

                              

                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-personal"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Investment Planning</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-career"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Markets Research</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;