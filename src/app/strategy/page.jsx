import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Brand from '@/components/landingPage/Brand';
import Strategy from '@/components/pages/strategy/Strategy';

import React from 'react';


const StrategyPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="Strategy" title="Mission, Vision and Core Values" />
               <Strategy />
            <Brand sectionClass="default-padding" />
        </>
    );
};

export default StrategyPage;