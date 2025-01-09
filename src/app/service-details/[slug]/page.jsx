import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ServiceDetails from '@/components/pages/service-details/ServiceDetails';

const ServiceDetailsPage = ({ params }) => {
    const { slug } = params;
    const selectedService = Services2Data.find(service => service.id === parseInt(slug));

    return (
        <>
            <BreadCrumb breadCrumb="Service-details" title="Service Details" />
            <ServiceDetails serviceInfo={selectedService} allServices={Services2Data} />
        </>
    );
};

export default ServiceDetailsPage;
