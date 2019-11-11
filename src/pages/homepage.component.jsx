import React from 'react';

import Hero from '../components/hero/hero.component';
import AboutSection from '../components/about-section/about-section.component'
import SkillsSection from '../components/skills-section/skills-section.component';
import ProjectsSection from '../components/projects-section/projects-section.component';
import ContactSection from '../components/contact-section/contact-section.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='home-page'>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </div>
);

export default HomePage;