import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function FormSubmission() {
  const formRef = useRef(null)
  const formsubref=useRef(null)
  const [isVisible,setIsVisible]=useState(false)
  const [hasScrolled,setHasScrolled]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4buglep',     
        'template_yzrdlfs',    
        formRef.current,
        'JPJG82EAcsc31bVfE'      
      )
      .then(
        () => {
          alert('Message sent successfully!')
          formRef.current.reset()
        },
        (error) => {
          console.error(error)
          alert('Failed to send message. Try again.')
        }
      )
  }

  useEffect(() => {
      const onScroll = () => {
        setHasScrolled(true)
        window.removeEventListener('scroll', onScroll)
      }
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }, [])
  
    
    useEffect(() => {
      if (!hasScrolled || !formsubref.current) return
  
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
  
      observer.observe(formsubref.current)
  
      return () => observer.disconnect()
    }, [hasScrolled])

  return (
    <div className={`
    pt-10 min-h-[200px]
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-20'}
    lg:max-w-5xl lg:mx-auto
    `} ref={formsubref}>
      <h1 className="pt-8.5 text-3xl text-white  px-5">Get In Touch</h1>
      <div className='sm:flex sm:justify-center'>

        <div className="text-white py-5 px-5 sm:min-w-70.5 sm:shrink sm:max-w-100">
          
          <p className="py-2.5 text-[18px]">
            Feel free to reach out for opportunities, collaborations,
            or any project-related discussions. I’m always open to connecting.
          </p>
          <img src="/suit_with_tie.jpeg" alt="" className='w-auto h-auto'/>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-black p-5 rounded-xl space-y-4 sm:flex 
                    sm:flex-col sm:justify-center sm:min-w-87.5 sm:mx-0"
        >
          
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-1/2 p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-1/2 p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
            />
          </div>

          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
          />

          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
          />

          
          
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white resize-none text-[18px]"
          ></textarea>

          
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition text-[18px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormSubmission
