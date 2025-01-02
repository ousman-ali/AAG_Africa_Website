"use client"
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';

import ErrorPageContent from '@/components/NotFound/ErrorPageContent';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="error" title="Error" />
                <ErrorPageContent />
          
        </> 
    );
};

export default ErrorPage;