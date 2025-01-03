"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import axios from 'axios';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState({});

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {

                const [contactData, serviceData] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/service`)
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
                        {shape ? <Image src={shape} alt="Shape" /> : <Image src={shape7} alt="Shape" />}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Link href="/">
                                        {logo ? <Image className="logo" src={logo} alt="Logo" /> : <Image className="logo" src={logoLight} alt="Logo" />}
                                    </Link>
                                    <p>
                                        Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
                                    </p>
                                    <div className="opening-hours">
                                        <h5>Opening Hours</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Monday – Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">2pm – 2pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Off Day</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Company</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">Compnay Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans & Pricing</Link>
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
                                        {service.slice(-5).map((service)=>(
                                            <li>
                                                <Link href={`/services-details${service.slug}`}>{service.serviceName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">Contact Us</h4>
                                <p>
                                    Join our subscribers list to get the latest <br /> news and special offers.
                                </p>
                                {/* <div className={`f-item newsletter ${formStyle}`}>
                                    <FooterNewsLetter />
                                </div> */}
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
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://themeforest.net/user/validthemes/portfolio" target='_blank'>validthemes</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/faq">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">Privacy</Link>
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