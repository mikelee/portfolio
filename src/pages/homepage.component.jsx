import React from 'react';

import Hero from '../components/hero/hero.component';
import ProjectsSection from '../components/projects-section/projects-section.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='home-page'>
        <Hero />
        <ProjectsSection />
    </div>
);

export default HomePage;