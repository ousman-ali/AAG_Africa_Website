

import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Blog from '@/components/pages/blog/Blog';
import React from 'react';

const Blog3Column = () => {
    return (
        <>
            <BreadCrumb breadCrumb="blog-3-column" title="Blog 3 Column" />
               <Blog />
            
        </>
    );
};

export default Blog3Column;