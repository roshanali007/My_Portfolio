import React from 'react'

function Navbar({ open, onHome, onAbout, onProjects, onContact }) {
  return (
    <nav
      className={`
        fixed top-16 left-0 w-full z-50
        h-[calc(100vh-63px)]
        bg-black text-white
        transition-all duration-300 ease-in-out
        ${open ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
      `}
    >
      <ul className="flex flex-col gap-6 p-6 text-lg justify-center items-center font-bold">
        <li onClick={onHome} className="cursor-pointer hover:text-gray-300">Home</li>
        <li onClick={onAbout} className="cursor-pointer hover:text-gray-300">About</li>
        <li onClick={onProjects} className="cursor-pointer hover:text-gray-300">Projects</li>
        <li onClick={onContact} className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
    </nav>
  )
}


export default Navbar