import React, { useEffect, useState } from 'react'

function Intro() {
    const [show,setshow]=useState(false)
    useEffect(()=>{
        setshow(true)
    },[])
  return (
    <div 
    className={`p-10 text-[18px] text-white flex justify-center items-center gap-8 flex-col
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} sm:flex-row lg:max-w-5xl lg:mx-auto `}
    >
        <span className='min-w-0 sm:wrap-break-word'>roshanalink321@gmail.com</span>
        <img src="/suit.jpeg" alt="" className='lg:max-w-138 h-auto sm:shrink min-w-0 '/>
        <span className='min-w-0 sm:wrap-break-word'>+91 9074449535</span>
    </div>
  )
}

export default Intro