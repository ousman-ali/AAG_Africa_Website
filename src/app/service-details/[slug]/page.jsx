
"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Services2Data from '@/assets/jsonData/services/Services2Data.json';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ServiceDetails from '@/components/pages/service-details/ServiceDetails';

const ServiceDetailsPage = () => {
    const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  
  useEffect(() => {
    if (!slug){
    console.log(slug)
    return;
  }

    const fetchServiceDetails = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/service`);
        const currentService = data.find((svc) => svc.slug === slug);
        currentService.images = typeof currentService.images === 'string'
          ? JSON.parse(currentService.images)
          : currentService.images;
        setService(currentService);
        setRelatedServices(data.filter((svc) => svc.slug !== slug).slice(-6));
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [slug]);

    return (
        <>
            <BreadCrumb breadCrumb={service?.serviceName} title={service?.serviceName} />
            <ServiceDetails serviceInfo={service} allServices={relatedServices} />
        </>
    );
};

export default ServiceDetailsPage;
