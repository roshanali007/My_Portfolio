import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function Mechkeys() {
 const [show,setshow]=useState(false)
   
        useEffect(()=>{
            window.scrollTo(0, 0)
            setshow(true)
        },[])
    
      return (
        <div className=' text-gray-600 overflow-hidden'>
            <h1 className='p-5 font-bold text-3xl'>MechKeys</h1>
            <div>
                <img src="/mechkey_filter.png" alt="" className={`
                    py-5 pl-5 pr-10
                    transition-all duration-700 ease-out
                    ${show? 'opacity-100 translate-x-0':'opacity-0 translate-x-50'}
                    `} />
                <img src="/mechkey_2.png" alt="" className={`
                    py-5 pl-10 pr-5
                    transition-all duration-700 ease-out
                    ${show? 'opacity-100 translate-x-0':'opacity-0 -translate-x-50'}
                    `} />
            </div>
            <div className={`
                    flex flex-col gap-5 p-5
                    transition-all duration-700 ease-out
                    ${show? 'opacity-100 translate-y-0':'opacity-0 translate-y-10'}
                    `}>
                <p className='text-[18px] text-white'>
                   A Mailchimp UI clone built using HTML and CSS to explore advanced styling techniques, including hover effects,
                    transitions, animations, and ::before / ::after pseudo-elements. 
                   This project helped strengthen my understanding of CSS architecture, interactive UI design, and visual consistency.
                </p>
                <a href="https://js-project-omega-drab.vercel.app/" className='text-[18px] text-gray-600'>Live Demo</a>
            </div>
            <Footer/>
        </div>
      )
}

export default Mechkeys