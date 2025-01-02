
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ContactMap from '@/components/pages/contacts/ContactMap';
import ContactStyle1 from '@/components/pages/contacts/ContactStyle1';

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