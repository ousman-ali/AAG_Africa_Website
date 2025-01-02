
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Brand from '@/components/landingPage/Brand';
import Service from '@/components/pages/service/Service';

import React from 'react';



const Service2Page = () => {
    return (
        <>
            <BreadCrumb breadCrumb="Service-2" title="Our Services" />
                
                <Service />
                <Brand sectionClass="default-padding"/>
                
            
        </>
    );
};

export default Service2Page;