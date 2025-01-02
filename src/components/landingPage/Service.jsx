import React from 'react';
import Services4Data from '@/assets/jsonData/services/Services4Data.json'
import SingleServices4 from './SingleServices4';

const Service = () => {
    return (
        <>
            <div className="services-style-four-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">What we do</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services4Data.map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices4 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;