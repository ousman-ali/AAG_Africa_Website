import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(/assets/img/about/212.jpg)` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-35">Why Choose AAG Africa?</h2>
                                <ul className="list-item">
                                    <li className="wow fadeInUp">
                                        <h4>Commitment to Quality </h4>
                                        <p>
                                        We ensure every product meets the highest standards through rigorous quality control processes.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>Extensive Network</h4>
                                        <p>
                                        Our global partnerships enable us to source diverse, high-quality goods to meet your specific needs.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>Experienced Team</h4>
                                        <p>
                                        With deep industry expertise, we provide seamless logistics and outstanding customer service.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>Competitive Pricing</h4>
                                        <p>
                                        We deliver cost-effective solutions without compromising on quality or service.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;