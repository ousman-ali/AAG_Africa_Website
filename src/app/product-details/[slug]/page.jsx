

import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ProductDetails from '@/components/pages/product-details/ProductDetails';

export const metadata = {
    title: "Consua - Consulting Business - Project Details"
}

const ProjectDetailsPage = ({ params }) => {

    const { id } = params
    const data = Services2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <BreadCrumb breadCrumb="Product-details" title="Product Details" />
                <ProductDetails projectInfo={data} />
            
        </>
    );
};

export default ProjectDetailsPage;