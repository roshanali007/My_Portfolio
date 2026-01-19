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
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
        <span>roshanalink321@gmail.com</span>
        <img src="/suit.jpeg" alt="" className='w-auto h-auto'/>
        <span>+91 9074449535</span>
    </div>
  )
}

export default Intro