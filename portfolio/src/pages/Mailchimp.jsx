import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function Mailchimp() {
  const [show, setShow] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (loadedImages === 2) {
      setShow(true)
    }
  }, [loadedImages])

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1)
  }

  return (
    <div className="text-yellow-300 overflow-x-hidden">
      <div className='lg:max-w-5xl lg:mx-auto'>
      <h1 className="p-5 font-bold text-3xl">MailChimp</h1>
    <div className='max-w-full md:flex md:flex-col md:items-center'>
      <div className='md:max-w-140 lg:max-w-4xl'>
        <img
          src="/mailchimp_main.png"
          onLoad={handleImageLoad}
          className={`
            py-5 pl-5 pr-10
            transition-all duration-700 ease-out
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}
        />

        <img
          src="/mailchimp_2.png"
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
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          md:max-w-140 lg:max-w-4xl
        `}
      >
        <p className="text-[18px] text-white">
          A Mailchimp UI clone built using HTML and CSS to explore advanced styling
          techniques, including hover effects, transitions, animations, and
          ::before / ::after pseudo-elements. This project helped strengthen my
          understanding of CSS architecture, interactive UI design, and visual
          consistency.
        </p>

        <a
          href="https://mailchimp-ashen.vercel.app/"
          className="text-[18px] text-yellow-300"
        >
          Live Demo
        </a>
      </div>
    </div>
    </div>

      <Footer />
    </div>
  )
}

export default Mailchimp
