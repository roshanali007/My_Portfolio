import React, { useEffect, useRef, useState } from 'react'

function About() {
  const aboutRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

 const [hasScrolled, setHasScrolled] = useState(false)

  // Detect user scroll
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true)
      window.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Start observing ONLY after scroll
  useEffect(() => {
    if (!hasScrolled || !aboutRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(aboutRef.current)

    return () => observer.disconnect()
  }, [hasScrolled])

  return (
    <div
      ref={aboutRef}
      className={`
        text-white text-[18px]
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      <h1 className='text-3xl pl-5'>About</h1>

      <img
        src="/b&w.jpeg"
        alt="Profile"
        className='px-2.5 pt-5'
      />

      <p className='text-[18px] px-5 pt-5'>
        I’m a front-end developer and Computer Science student with hands-on experience in HTML, CSS,
        JavaScript, and React. I enjoy crafting responsive, scalable,
        and pixel-perfect UIs, and I’m always eager to learn and improve my skills by building real-world projects.
      </p>
    </div>
  )
}

export default About