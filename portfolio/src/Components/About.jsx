import React, { useEffect, useRef, useState } from 'react'

function About() {
  const aboutRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

 const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true)
      window.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        threshold: 0.1,
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
        lg:max-w-5xl lg:mx-auto
      `}
    >
      <h1 className='text-3xl pl-5'>About</h1>
        <div className='sm:flex sm:justify-center'>
          <img
            src="/b&w.jpeg"
            alt="Profile"
            className='px-2.5 pt-5 sm:shrink sm:min-w-87.5 sm:max-w-100'
          />

          <p className='text-[18px] px-5 pt-5 sm:flex sm:items-center sm:max-w-87.5'>
            I’m a front-end developer and Computer Science student with hands-on experience in HTML, CSS,
            JavaScript, and React. I enjoy crafting responsive, scalable,
            and pixel-perfect UIs, and I’m always eager to learn and improve my skills by building real-world projects.
          </p>
        </div>
      
    </div>
  )
}

export default About