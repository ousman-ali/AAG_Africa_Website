import Image from "next/image";
import React from "react";
import Link from "next/link";
import InnerCta from "@/components/landingPage/InnerCta";

const ServiceDetails = ({ serviceInfo, allServices }) => {
  return (
    <div className="services-details-area overflow-hidden default-padding">
      <div className="container">
        <div className="services-details-items">
          <div className="row">
            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
              <div className="thumb">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${serviceInfo?.banner}`}
                  alt="Thumb"
                  width={1460}
                  height={782}
                  objectFit="cover"
                />
              </div>
              <h2>{serviceInfo?.serviceName}</h2>
              <p dangerouslySetInnerHTML={{ __html: serviceInfo?.description }}></p>
              <div className="features mt-10 mt-xs-30 mb-30 mb-xs-20">
                <p dangerouslySetInnerHTML={{ __html: serviceInfo?.details }}></p>
              </div>
              <div className="row">
                {serviceInfo?.images?.slice(0,3).map((image, index) => (
                  <div key={index} className="col-xl-4 col-md-6 single-item">
                    <div className="blog-style-one">
                      <div className="thumb">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${image}`}
                          width={800}
                          height={600}
                          alt="Thumb"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
              <div className="single-widget services-list-widget">
                <h4 className="widget-title">Related Services</h4>
                <div className="content">
                  <ul>
                    {allServices.map((service) => (
                      <li key={service.id}>
                        <Link href={`/service-details/${service.slug}`}>
                          {service.serviceName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <InnerCta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
