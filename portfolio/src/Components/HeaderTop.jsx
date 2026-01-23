import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function HeaderTop({ onHome, onAbout, onProjects, onContact }) {
    const [open,setOpen]=useState(false)

    const handleClick = (callback) => {
      callback()
      setOpen(false)
    }

     useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  return (
    <div className='w-full h-15'>
        <div className='flex justify-between items-center h-full p-2.5'>
            <div className='flex justify-center items-center gap-2 h-full'>
                <img src="/user_icon.webp" alt="" className='w-[50px] h-auto'/>
                <span className='text-2xl text-white font-medium'>Roshan Ali</span>
            </div>
            <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-6"
        >
          <span
            className={`absolute top-1/2 left-0 w-8 h-0.5 bg-white -translate-y-1/2 transition-all
            ${open ? "opacity-0" : ""}`}
          ></span>

          <span
            className={`absolute top-0 left-0 w-8 h-0.5 bg-white transition-all
            ${open ? "rotate-45 top-1/2" : ""}`}
          ></span>

          <span
            className={`absolute bottom-0 left-0 w-8 h-0.5 bg-white transition-all
            ${open ? "-rotate-45 bottom-1/2" : ""}`}
          ></span>
        </button>
      </div>

       <Navbar
        open={open}
        onHome={() => handleClick(onHome)}
        onAbout={() => handleClick(onAbout)}
        onProjects={() => handleClick(onProjects)}
        onContact={() => handleClick(onContact)}
      />
    </div>
    
  )
}

export default HeaderTop