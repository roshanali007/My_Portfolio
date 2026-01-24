import React, { useRef } from 'react'
import HeaderTop from './HeaderTop'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import FormSubmission from './FormSubmission'
import Footer from './Footer'
import CVDownload from './CVDownload'

function HomePage() {
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeaderTop
        onHome={() => scrollToSection(introRef)}
        onAbout={() => scrollToSection(aboutRef)}
        onProjects={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      <div ref={introRef} >
        <Intro />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <FormSubmission />
      </div>

      <Footer />
      <CVDownload/>
    </>
  )
}

export default HomePage
