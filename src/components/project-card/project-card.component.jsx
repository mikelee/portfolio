import React from 'react';

import './project-card.styles.scss';

const ProjectCard = ({ name, img, description, tech, url }) => (
    <a className='project-card' href={`${url}`} target="_blank" rel="noopener noreferrer">
        <div className='project-card-side project-card-side-front'>
            <img className='project-img' alt='project' src={img} />
        </div>
        <div className='project-card-side project-card-side-back'>
            <h4 className='project-name'>{name}</h4>
            <p className='project-description'>{description}</p>
            <div className='tech-section'>
                <p className='tech-used'>tech used:</p>
                <p className='tech-list'>{tech}</p>
            </div>
        </div>
    </a>
);

export default ProjectCard;