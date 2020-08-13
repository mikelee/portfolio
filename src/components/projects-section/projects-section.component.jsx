import React from 'react';

import projects from './projects';

import ProjectCard from '../project-card/project-card.component';

import './projects-section.styles.scss';

const ProjectsSection = () => (
    <div className='projects-section'>
        <h3 className='projects-section-title'>Projects</h3>
        <div className='projects-section-display'>
            {
                projects.map((project => <ProjectCard key={project.id} {...project} />))
            }
        </div>
    </div>
);

export default ProjectsSection;