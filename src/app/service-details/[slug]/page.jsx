"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ServiceDetails from "@/components/pages/service-details/ServiceDetails";

const ServiceDetailsPage = () => {
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) {
      console.log("Slug is not available:", slug);
      return;
    }

    const fetchServiceDetails = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/service`);
        console.log("Fetched data:", data); // Debugging

        const currentService = data.find((svc) => svc.slug === slug);
        if (currentService) {
          currentService.images = typeof currentService.images === 'string'
            ? JSON.parse(currentService.images)
            : currentService.images;

          setService(currentService);
          setRelatedServices(data.filter((svc) => svc.slug !== slug).slice(-6));
        } else {
          console.log("Service not found for slug:", slug);
        }
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <>
      <BreadCrumb breadCrumb={service?.serviceName} title={service?.serviceName} />
      <ServiceDetails serviceInfo={service} allServices={relatedServices} />
    </>
  );
};

export default ServiceDetailsPage;
