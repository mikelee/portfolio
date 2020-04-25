import React from 'react';

import './project-card.styles.scss';

const ProjectCard = ({ name, img, description, tech, url, index }) => (
    <div className={`project-card ${index !== 0 ? "alternate" : ""}`} >
        <a className='project-title' href={`${url}`} target="_blank" rel="noopener noreferrer">{name}</a>
        <div className='content'>
            <div className='project-info'>
                <p className='project-description'>{description}</p>
                <p className='project-tech'>
                    <span>Tech used: </span>
                    {tech.join(', ')}
                </p>
            </div>
            <img className='project-img'  alt='project' src={img} />
        </div>
    </div>
);

export default ProjectCard;