import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ServiceDetails from '@/components/pages/service-details/ServiceDetails';

export const metadata = {
    title: "Consua - Consulting Business - Services Details"
}

const ServiceDetailsPage = ({ params }) => {

    const { slug } = params
    const data = Services2Data.find(service => service.id === parseInt(slug))

    return (
        <>
            <BreadCrumb breadCrumb="Service-details" title="Service Details" />
                <ServiceDetails serviceInfo={data} />
            
        </>
    );
};

export default ServiceDetailsPage;