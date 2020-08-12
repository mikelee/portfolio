import React from 'react';

import './project-card.styles.scss';

const ProjectSquare = ({ name, img, description, tech, url }) => (
    <a className='project-square' href={`${url}`} target="_blank" rel="noopener noreferrer">
        <div className='project-square-side project-square-side-front'>
            <img className='project-img' alt='project' src={img} />
        </div>
        <div className='project-square-side project-square-side-back'>
            <h4 className='project-name'>{name}</h4>
            <p className='project-description'>{description}</p>
            <div className='tech-section'>
                <p className='tech-used'>tech used:</p>
                <p className='tech-list'>{tech}</p>
            </div>
        </div>
    </a>
);

export default ProjectSquare;