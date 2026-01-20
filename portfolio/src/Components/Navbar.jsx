import React from 'react'

function Navbar({open}) {
  return (
    <nav 
    className={`
        fixed top-16 left-0 w-full z-50
        h-[calc(100vh-63px)]
        bg-black text-white
        transition-all duration-300 ease-in-out
        ${open
          ? "opacity-80 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
    >
      <ul className="flex flex-col gap-6 p-6 text-lg justify-center items-center font-bold">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar