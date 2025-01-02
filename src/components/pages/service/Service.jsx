import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import SingleServices2 from './SingleServices2';

const Service = () => {
    return (
        <>
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: `url(/assets/img/shape/27.png)` }}>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(0, 6).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;