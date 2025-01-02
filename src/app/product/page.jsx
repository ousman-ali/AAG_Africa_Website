import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Product from '@/components/pages/products/Product';
import React from 'react';



const ProjectPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="Our Products" title="Latest Product" />
                <Product />
            
        </>
    );
};

export default ProjectPage;