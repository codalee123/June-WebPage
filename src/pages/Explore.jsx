import React from 'react'
import { Button2 } from '../component/button'

const Explore = () => {
  return (
    <div className=' h-max flex w-full text-white py-20 bg-black justify-center items-center'>
      {/* Background Image */}
        <div className='w-full'>
          <img
            src="Explore-vector.svg"
            alt=""
            className="
              absolute
              w-full
              h-max
              object-contain
              object-bottom
              pointer-events-none
              z-0
              max-md:object-cover
              max-md:h-[55%]
            "
          />        
                <div className='flex flex-col gap-10 max-md:justify-center text-center max-md:items-center  '>
          <p className='font-black text-4xl max-md:text-[40px] leading-12 '>Ready to Explore What June Can Do?</p>
          <div className='flex  flex-wrap gap-4 justify-center items-center'>
            <span className='font-light hover:text-gray-300 max-md:text-sm cursor-pointer text-[21px] border-r border-[#ffffff80] p-4'>Explore Solutions</span>
            <span className='font-light hover:text-gray-300 max-md:text-sm text-[21px] cursor-pointer border-r border-[#ffffff80] p-4'>See Developer Docs</span>
            <span className='font-light hover:text-gray-300 max-md:text-sm text-[21px] cursor-pointer  p-4'>Contact Sales</span>
          </div>
                </div>
        </div>
    </div>
  )
}

export default Explore

export const ExploreWithButton =({text,desc,text1="Book a Demo",text2="Explore Industry Solutions"})=> {
  return(
    <div className='full font-inter h-max flex text-white font-normal py-20 max-md:py-10 max-lg:px-8 max-md:px-5 bg-black justify-center items-center'>

      {/* Background Image */}
        <img
          src="Explore-v.svg"
          alt=""
          className="
            absolute
            object-fit
            w-full
            h-[40%]
            object-center
            pointer-events-none
            z-0
            max-md:object-cover
            max-md:h-[45%]
          "
        /> 

      <blockquote className='flex flex-col  gap-5 max-md:gap-6 max-md:justify-center text-center max-md:items-center  '>
        <h2 className='font-black text-4xl max-md:text-3xl leading-12 '>
          {text}
        </h2> 
        {desc && <p className='font-normal max-md:text-[21px]'>{desc}</p>}

        <div className='flex  flex-wrap gap-4 justify-center items-center'>
          <Button2
            text1={text1} 
            text2={text2}
          />
        </div>
      </blockquote>
    </div>
  )
}



export const ExploreWithoutButton =({text,desc})=> {
  return(
    <div className='full h-max font-inter flex text-white py-20 max-lg:px-8 max-md:px-5 bg-black justify-center items-center overflow-hidden'>

      {/* Background Image */}
        <img
          src="Explore-v.svg"
          alt=""
          className="
            absolute
            object-fit
            w-full
            h-[40%]
            object-center
            pointer-events-none
            z-0
            max-md:object-cover
            max-md:h-[45%]
          "
        /> 

      <blockquote className='flex flex-col gap-5 max-md:justify-center text-center max-md:items-center  '>
        <h2 className='font-black text-4xl max-md:text-[40px] leading-12 '>
          {text}
        </h2> 
        {desc && <p className='font-normal max-md:text-[21px]'>{desc}</p>}
      </blockquote>
    </div>
  )
}