import React from 'react';
import RatingsStar from '../utilities/RatingsStar';
import Image from 'next/image';

const SingleTestimonial2 = ({ testimonial }) => {
    const { quoteThumb, ratings, title, text, name, location, logo } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-two">
                    <Image src={`/assets/img/shape/quote.png`} width={135} height={121} alt="Quote" />
                    <div className="top-info">
                        <h3>{testimonial.name}</h3>
                        <div className="testimonial-rating">
                            <RatingsStar ratings={4.5} />
                        </div>
                    </div>
                    <div className="info">
                        <p dangerouslySetInnerHTML={{ __html: testimonial.description }} />
                    </div>
                    <div className="provider">
                        <div className="content">
                            <h4>{testimonial.name}</h4>
                            <span>{testimonial.role}</span>
                        </div>
                        <div className="thumb">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${testimonial.banner}`} width={67} height={37} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial2;