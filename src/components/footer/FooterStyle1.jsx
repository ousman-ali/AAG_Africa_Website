"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import shape7 from "@/assets/img/shape/7.png";
import Logo from "@/assets/img/footer.jpg";
import logoLight from "@/assets/img/logo/logo3.png";
import Link from "next/link";
import SocialShare from "../utilities/SocialShare";
import axios from "axios";


const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const [contactData, serviceData] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/service`),
        ]);
        setContact(contactData.data);
        setService(serviceData.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, []);

  return (
    <>
      <footer className="bg-dark text-light">
        <div className="footer-shape">
          <div className={`item ${shapeClass}`}>
            {shape ? (
              <Image src={shape} alt="Shape" />
            ) : (
              <Image src={shape7} alt="Shape" />
            )}
          </div>
        </div>
        <div className="container">
          <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                <div className="f-item about">
                  <Link href="/">
                    {logo ? (
                      <Image className="logo" src={logoLight} alt="Logo" />
                    ) : (
                      <Image className="logo" src={logoLight} alt="Logo" />
                    )}
                  </Link>
                  <p style={{textAlign: 'justify'}}>
                  AAG Import and Export bridges global markets with a commitment to quality, integrity, and innovation. We specialize in delivering high-quality products and reliable services, empowering our clients and fostering sustainable growth. 
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Company</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">Company Profile</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Help Center</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/product">Products</Link>
                    </li>
                    <li>
                      <Link href="/blog">News And Blogs</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    {service.slice(-5).map((service) => (
                      <li key={service.id}>
                        <Link href={`/services-details${service.slug}`}>
                          {service.serviceName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-item">
                <h4 className="widget-title">Contact Us</h4>
                <p>
    Reach out to us for the latest updates, <br /> special offers, and inquiries.
</p>

                {contact.phone1 && (
                  <p>
                    <i className="fa fa-phone"></i> {contact.phone1}
                  </p>
                )}
                {contact.email && (
                  <p>
                    <i className="fa fa-envelope"></i> {contact.email}
                  </p>
                )}
                <p>{contact.address}</p>
                <ul className="footer-social">
                  <SocialShare contact={contact} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  &copy; Copyright {new Date().getFullYear()}. All Rights
                  Reserved by AAG Africa{" "}
                  <a href="keradiontechnology.com" target="_blank">
                    Keradion Technology
                  </a>
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
                  <li>
                    <Link href="/team">Teams</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterStyle1;
