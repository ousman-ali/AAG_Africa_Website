import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBanner1 = ({ banner }) => {
    const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-11 offset-xl-1">
                        <div className="content">
                            
                            <h2><strong>{title1}</strong> {title2}</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapeThumb}`} width={916} height={693} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner1;