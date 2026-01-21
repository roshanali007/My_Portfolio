import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function Projects() {
  const projectRef=useRef(null)
  const [isVisible,setIsVisible]=useState(false)
 useEffect(() => {
  if (!projectRef.current) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    }
  )

  observer.observe(projectRef.current)

  return () => observer.disconnect()
}, [])
  return (
    <div className={`
    pt-10
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-20'}
    `} ref={projectRef}>
        <h1 className='text-3xl text-white pl-5'>Projects</h1>
        <div className='pt-5 px-5'>
            <img src="/doordash_main.png" alt="" className='w-auto h-auto'/>
            <h2 className='text-white flex justify-center pt-2.5'>DoorDash</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/mailchimp_main.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5 '>MailChimp</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/mechkey_filter.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>MechKeys</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/filpkart_main.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>Flipkart</h2>
        </div>
    </div>
  )
}

export default Projects