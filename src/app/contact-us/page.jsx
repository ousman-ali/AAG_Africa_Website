
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ContactMap from '@/components/contact/ContactMap';
import ContactStyle1 from '@/components/contact/ContactStyle1';

import React from 'react';



const ContactUs = () => {
    return (
        <>
            <BreadCrumb breadCrumb="contact-us" title="Contact Us" />
                
                <ContactStyle1 />
                
                <ContactMap />
          
        </>
    );
};

export default ContactUs;