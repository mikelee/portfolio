import React from 'react';

import './project-card.styles.scss';

const ProjectCard = ({ name, img, tech, description, index }) => (
    <div className={`project-card ${index % 2 !== 0 ? "alternate" : ""}`} >
        <div className='content'>
            <div className='project-info'>
                <h3 className='project-title'>{name}</h3>
                <p className='project-description'>{`${name} ${description}`}</p>
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