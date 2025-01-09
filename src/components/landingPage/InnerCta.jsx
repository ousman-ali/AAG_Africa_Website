import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Link from 'next/link'
const InnerCta = () => {
    const [contactData, setContactData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`);
                setContactData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
  return (
    <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/14.png)` }}>
                                        <div className="content">
                                            <h3>Need Help?</h3>
                                            <p>
                                                Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                                            </p>
                                            <h2><a href={`tel:${contactData?.phone}`}>{contactData.phone1}</a></h2>
                                            <h4><a href={`mailto:${contactData?.email}`}>{contactData.email1}</a></h4>
                                            <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                        </div>
                                    </div>
  )
}

export default InnerCta
