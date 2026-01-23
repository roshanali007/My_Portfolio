import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function DoorDash() {
  const [show, setshow] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (loadedImages === 2) {
      setshow(true)
    }
  }, [loadedImages])

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1)
  }

  return (
    <div className="text-orange-400 overflow-x-hidden">
      <h1 className="p-5 font-bold text-3xl">DoorDash</h1>

      <div>
        <img
          src="/doordash_main.png"
          onLoad={handleImageLoad}
          className={`
            py-5 pl-5 pr-10
            transition-all duration-700 ease-out
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}
        />

        <img
          src="/doordash_2.png"
          onLoad={handleImageLoad}
          className={`
            py-5 pl-10 pr-5
            transition-all duration-700 ease-out
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}
        />
      </div>

      <div
        className={`
          flex flex-col gap-5 p-5
          transition-all duration-700 ease-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <p className="text-[18px] text-white">
          A pixel-perfect DoorDash UI clone built using pure HTML and CSS to strengthen my understanding of layout systems
          and modern styling techniques. The project focuses on accurate spacing, typography, responsiveness, and design fidelity.
        </p>

        <a
          href="https://vonnue-doordash.vercel.app/"
          className="text-[18px] text-orange-400"
        >
          Live Demo
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default DoorDash
