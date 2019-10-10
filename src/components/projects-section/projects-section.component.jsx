import React from 'react';

import projects from './projects';

import ProjectCard from '../project-card/project-card.component';

import './projects-section.styles.scss';

const ProjectsSection = () => (
    <div className='projects-section'>
        <h3 className='title'>Projects</h3>
        <div className='projects-display'>
            {
                projects.map((project => <ProjectCard key={project.id} name={project.name} img={project.img} tech={project.tech} background={project.background} description={project.description} skew={project.skew} />))
            }
            
        </div>
    </div>
);

export default ProjectsSection;