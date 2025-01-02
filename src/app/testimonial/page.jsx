import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Brand from '@/components/landingPage/Brand';

import Testimonial from '@/components/pages/testimonial/Testimonial';
import React from 'react';


const TeamPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="Testimonial" title="What Our Client Say?" />
                <Testimonial />
            <Brand/>
        </>
    );
};

export default TeamPage;