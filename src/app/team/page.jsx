import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Team from '@/components/pages/team/Team';
import React from 'react';


const TeamPage = () => {
    return (
        <>
            <BreadCrumb breadCrumb="team" title="Team Members" />
                <Team fullTeam={true} sectionClass="bg-gray" />
            
        </>
    );
};

export default TeamPage;