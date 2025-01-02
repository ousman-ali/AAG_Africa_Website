
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Brand from '@/components/landingPage/Brand';
import ChooseUs from '@/components/landingPage/ChooseUs';
import About from '@/components/pages/about/About';

import React from 'react';



const AboutUsPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="About-us" title="About Us" />
                <About />
            <ChooseUs />
            <Brand />
        </>
    );
};

export default AboutUsPage;