import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function Projects() {
  const projectRef=useRef(null)
  const [isVisible,setIsVisible]=useState(false)
  useEffect(()=>{
    const observer=new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setIsVisible(true)
        }
      },
      {threshold:0.2}
    )
    if(projectRef.current) observer.observe(projectRef.current)
    return ()=>{
        if(projectRef.current) observer.unobserve(projectRef.current)
    }
  },[])
  return (
    <div className={`
    pt-10
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-20'}
    `} ref={projectRef}>
        <h1 className='text-3xl text-white pl-5'>Projects</h1>
        <div className='pt-5 px-5'>
            <img src="/doordash_main.png" alt="" className='w-[150] h-auto'/>
            <h2 className='text-white flex justify-center pt-2.5'>DoorDash</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/mailchimp_main.png" alt="" className='w-[150] h-auto' />
            <h2 className='text-white flex justify-center pt-2.5 '>MailChimp</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/mechkey_filter.png" alt="" className='w-[150] h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>MechKeys</h2>
        </div>
        <div className='pt-5 px-5'>
            <img src="/filpkart_main.png" alt="" className='w-[150] h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>Flipkart</h2>
        </div>
    </div>
  )
}

export default Projects