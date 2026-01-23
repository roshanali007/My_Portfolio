import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Projects() {
  const projectRef=useRef(null)
  const [isVisible,setIsVisible]=useState(false)
 const [hasScrolled, setHasScrolled] = useState(false)
 const navigate=useNavigate()


  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true)
      window.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  
  useEffect(() => {
    if (!hasScrolled || !projectRef.current) return

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

    observer.observe(projectRef.current)

    return () => observer.disconnect()
  }, [hasScrolled])
  return (
    <div className={`
    pt-10 min-h-[200px]
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-20'}
    `} ref={projectRef}>
        <h1 className='text-3xl text-white pl-5'>Projects</h1>
        <div className='pt-5 px-5' onClick={()=>navigate('/doordash')}>
            <img src="/doordash_main.png" alt="" className='w-auto h-auto'/>
            <h2 className='text-white flex justify-center pt-2.5'>DoorDash</h2>
        </div>
        <div className='pt-5 px-5' onClick={()=>navigate('/mailchimp')}>
            <img src="/mailchimp_main.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5 '>MailChimp</h2>
        </div>
        <div className='pt-5 px-5' onClick={()=>navigate('/mechkey')}>
            <img src="/mechkey_filter.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>MechKeys</h2>
        </div>
        <div className='pt-5 px-5' onClick={()=>navigate('/flipkart')}>
            <img src="/filpkart_main.png" alt="" className='w-auto h-auto' />
            <h2 className='text-white flex justify-center pt-2.5'>Flipkart</h2>
        </div>
    </div>
  )
}

export default Projects