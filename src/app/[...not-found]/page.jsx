import BreadCrumb from '@/components/breadCrumb/BreadCrumb';

import NotFoundContent from '@/components/NotFound/NotFoundContent';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="404" title="404 Page" />
                <NotFoundContent />
            
        </>
    );
};

export default NotFoundPage;