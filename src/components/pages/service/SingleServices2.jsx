import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServices2 = ({ service }) => {
    const { id, thumb, title, icon, text, btnText } = service
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <>
            <div className="services-style-two active">
                <div className="thumb">
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${service.banner}`} width={800} height={600} alt="Thumb" />
                    <div className="title">
                        <Link href={`/service-details/${service.slug}`}>

                            <h4>{service.serviceName}</h4>
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <p dangerouslySetInnerHTML={{ __html: truncateText(service.description, 120) }} />
                    <div className="button">
                        <Link href={`/service-details/${service.slug}`}>Read more</Link>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServices2;