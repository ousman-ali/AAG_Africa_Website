"use client"
import React from 'react';
import AchievementCounter2 from './AchievementCounter2';

const Cta = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="request-call-back-area secondary text-light default-padding" style={{ backgroundImage: `url(/assets/img/cta.jpg)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="title">Check Our Contacts <br /> To get Free Business Support!</h2>
                            
                        </div>
                        <div className="col-lg-6 text-end">
                            <AchievementCounter2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cta;