import React from 'react';

import GitHubIcon from '../../assets/GitHub_Logo_White.png';

import './hero.styles.scss';

const Hero = () => (
    <div className='hero'>
        <a href='https://www.github.com/mikelee'>
            <img className='github-icon'  alt='GitHub' src={GitHubIcon} />
        </a>
        <div className='content'>
            <h1 className='name'>Mike Lee</h1>
            <h3 className='description'>Fullstack Web Developer</h3>
        </div>
    </div>
);

export default Hero;