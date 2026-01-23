import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function Flipkart() {
  const [show,setshow]=useState(false)

     useEffect(()=>{
        window.scrollTo(0, 0)
         setshow(true)
     },[])
 
   return (
     <div className=' text-blue-400 overflow-x-hidden'>
         <h1 className='p-5 font-bold text-3xl'>Flipkart</h1>
         <div>
             <img src="/filpkart_main.png" alt="" className={`
                 py-5 pl-5 pr-10
                 transition-all duration-700 ease-out
                 ${show? 'opacity-100 translate-x-0':'opacity-0 translate-x-12'}
                 `} />
             <img src="/flipkart_filter.png" alt="" className={`
                 py-5 pl-10 pr-5
                 transition-all duration-700 ease-out
                 ${show? 'opacity-100 translate-x-0':'opacity-0 -translate-x-12'}
                 `} />
         </div>
         <div className={`
                 flex flex-col gap-5 p-5
                 transition-all duration-700 ease-out
                 ${show? 'opacity-100 translate-y-0':'opacity-0 translate-y-10'}
                 `}>
             <p className='text-[18px] text-white'>
                 A Flipkart-inspired e-commerce UI built with React.js to learn and apply core concepts such as React hooks,
                 props, conditional rendering, product filtering, and client-side routing. This project helped me understand 
                 how to manage application state, structure reusable components, and build interactive, scalable user interfaces.
             </p>
             <a href="https://flipkart-clone-kappa-three.vercel.app/" className='text-[18px] text-blue-400'>Live Demo</a>
         </div>
         <Footer/>
     </div>
   )
}

export default Flipkart