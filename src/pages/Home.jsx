import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Education from '../components/Education'
import Contact from '../components/Contact'

function Home() {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <Education></Education>
            <Contact></Contact>
        </div>
    )
}

export default Home

