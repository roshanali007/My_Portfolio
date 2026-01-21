import React from 'react'
import HeaderTop from './HeaderTop'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import FormSubmission from './FormSubmission'

function HomePage() {
  return (
    <>
        <HeaderTop/>
        <Intro/>
        <About/>
        <Projects/>
        <FormSubmission/>
    </>
  )
}

export default HomePage