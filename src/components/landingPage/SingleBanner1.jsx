import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shapeThumb from '@/assets/img/shape/4.png';

const SingleBanner1 = ({ banner }) => {
    const { title, file, btnText } = banner; // Removed extra comma and corrected destructuring

    return (
        <>
            <div 
                className="banner-thumb bg-cover shadow dark" 
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/storage/${file})` }} 
            ></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-11 offset-xl-1">
                        <div className="content">
                            <h2><strong>{title}</strong></h2>
                            {/* {btnText && (
                                <Link href="/some-path">
                                    <a className="btn btn-primary">{btnText}</a>
                                </Link>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={shapeThumb} width={916} height={693} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner1;
