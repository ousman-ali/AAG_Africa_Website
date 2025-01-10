
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import React from 'react';
import Project2Data from '@/assets/jsonData/project/Project2Data.json'
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';



const ProjectDetailsPage = ({ params }) => {

    const { id } = params
    const data = Project2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <BreadCrumb breadCrumb="Project-details" title="Project Details" />
                <ProjectDetailsContent projectInfo={data} />
            
        </>
    );
};

export default ProjectDetailsPage;