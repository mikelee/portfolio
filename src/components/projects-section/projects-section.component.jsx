import React from 'react';

import projects from './projects';

import ProjectCard from '../project-square/project-square.component';

import './projects-section.styles.scss';

const ProjectsSection = () => (
    <div className='projects-section'>
        <h3 className='projects-section-title'>Projects</h3>
        <div className='projects-section-display'>
            {
                projects.map((project => <ProjectCard key={project.id} name={project.name} img={project.img}  description={project.description} tech={project.tech} url={project.url} />))
            }
        </div>
    </div>
);

export default ProjectsSection;