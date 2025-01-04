import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/1.jpg"

import About1Card from './About1Card';

const About = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                
                <div className="container">
                    <div className="row">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Who We Are?</div>
                            <h2 className="title mb-25">AAG Import and Export</h2>
                            <p style={{textAlign:"justify"}}>
                            AAG Import and Export is a dynamic and family-founded international trading company based in Addis Ababa, Ethiopia. With a strong commitment to integrity, innovation, and customer satisfaction, AAG has positioned itself as a trusted name in the global import and export industry.




                            </p>
                            <p style={{textAlign:"justify"}}>Founded by a father and son team, AAG began its journey with the vision of building a lasting family legacy through quality service and meaningful partnerships. What started as a modest import venture has grown into a multi-faceted operation, serving diverse industries and clients worldwide.</p>
                            <p style={{textAlign:"justify"}}> AAG specializes in importing high-quality electric cars, construction vehicles, solar energy solutions, and custom orders like body kits, spare parts, furniture, and ceramics. The company also excels in exporting goods and ensuring smooth and efficient logistics for its clients.</p>
                            <div className="button mt-40">
                                <Link className="btn-animation" href="/about-us"><i className="fas fa-arrow-right"></i> <span>Read More</span></Link>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                                <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;