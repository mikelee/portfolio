import React from 'react';

import image from '../../assets/me_pic.png'

import './about-section.styles.scss';

const AboutSection = () => (
    <div className='about-section'>
        <h3 className='title'>About Me</h3>
        <div className='content'>
            <img className='image' src={image} alt='Me' />
            <p className='description'>Hi I'm Mike Lee! I'm a fullstack web developer located in Reading, PA. I went to Penn State for 2 years exploring different career paths. I bounced between majors, thinking I'll become an Aerospace Engineer or a Biological Researcher. Ultimately, they weren't what I wanted and I dropped out. Later, I found what I've been looking for all along, software development. It's the perfect combination of creativity and logic. Also, I love to keep growing and learning, and the rapidly changing field of software provides that for me!</p>
        </div>
    </div>
);

export default AboutSection;