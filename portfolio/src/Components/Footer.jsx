import React, { useEffect, useRef, useState } from 'react'

function Footer() {
    const footerRef=useRef(null)
    const [isVisible,setIsVisible]=useState(false)
    const [hasScrolled,setHasScrolled]=useState(false)

    useEffect(() => {
          const onScroll = () => {
            setHasScrolled(true)
            window.removeEventListener('scroll', onScroll)
          }
          window.addEventListener('scroll', onScroll)
          return () => window.removeEventListener('scroll', onScroll)
        }, [])
      
        
        useEffect(() => {
          if (!hasScrolled || !footerRef.current) return
      
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
      
          observer.observe(footerRef.current)
      
          return () => observer.disconnect()
        }, [hasScrolled])


  return (
    <div className={`
    p-5 bg-white
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-20'}
    `} ref={footerRef}>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl text-black font-bold'>Roshan Ali</h1>
            <div className='flex justify-start items-center'>
                <a href="https://www.instagram.com/_rosh__007?igsh=MmpwanpuMWdmdTV4"><img src="/instagram.jpg" alt="" className='w-10'/></a>
                <a href="https://www.linkedin.com/in/roshan-ali-34913b279/"><img src="/linkedln.jpg" alt="" className='w-15'/></a>
                <a href="https://github.com/roshanali007"><img src="/github.jpg" alt="" className='w-10'/></a>
            </div>
            <div className='text-[18px] text-black font-bold flex flex-col'>
                <span>Ozhur, Tirur, Malappuram</span>
                <span>Ozhur P.O, 676307</span>
            </div>
            <div className='text-[18px] text-black font-bold flex flex-col'>
                <a href=""><span className='underline'>Pivacy Policy</span></a>
                <a href=""><span className='underline'>Accessibility Statement</span></a>
            </div>
            <div className='text-[18px] text-black font-bold flex flex-col' >©2026 Roshan Ali. All rights reserved</div>
        </div>
    </div>
  )
}

export default Footer