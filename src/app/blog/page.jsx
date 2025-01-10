

import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Blog from '@/components/pages/blog/Blog';
import React from 'react';

const Blog3Column = () => {
    return (
        <>
            <BreadCrumb breadCrumb="Our News And Events" title="News And Events" />
               <Blog />
            
        </>
    );
};

export default Blog3Column;