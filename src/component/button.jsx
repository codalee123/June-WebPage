import React from 'react'

const Button = ({text, logo}) => {
  return (
    <div className=' flex justify-center gap-x-3 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-5 py-3 bg-white w-fit max-md:w-full max-sm:py-3 '>
        <p className='text-base  font-medium font-inter max-sm:text-base text-black'>{text}</p>
        {logo && <img src={logo} />}
    </div>
  )
} 

export default Button

// Mobile Button
export const Button2 = ({text, logo}) => {
  return (
    <div className=' flex  gap-x-4 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-5 py-3 bg-white w-fit max-md:w-full max-sm:py-3 '>
        <p className='text-base capitalize  font-medium font-inter max-sm:text-base text-black'>{text}</p>
        {logo && <img src={logo} />}
    </div>
  )
} 

