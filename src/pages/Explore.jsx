import React from 'react'
import { Button2 } from '../component/button'

const Explore = () => {
  return (
    <div className='full h-max flex text-white py-20 max-lg:px-8 max-md:px-5 bg-black justify-center items-center'>
      <div className='flex flex-col gap-10 max-md:justify-center text-center max-md:items-center  '>
        <p className='font-black text-4xl max-md:text-[40px] leading-12 '>Ready to Explore What June Can Do?</p>

        <div className='flex  flex-wrap gap-4 justify-center items-center'>
          <span className='font-light max-md:text-sm text-[21px] border-r border-[#ffffff80] p-4'>Explore Solutions</span>
          <span className='font-light max-md:text-sm text-[21px] border-r border-[#ffffff80] p-4'>See Developer Docs</span>
          <span className='font-light max-md:text-sm text-[21px]  p-4'>Contact Sales</span>
        </div>
      </div>
    </div>
  )
}

export default Explore

export const Explore2 =({text,desc})=> {

  const color = "bg-[rgba(161,106,250,1)]"
  return(
    <div className='full h-max flex text-white py-20 max-lg:px-8 max-md:px-5 bg-black justify-center items-center'>
      <blockquote className='flex flex-col gap-10 max-md:justify-center text-center max-md:items-center  '>
        <h2 className='font-black text-4xl max-md:text-[40px] leading-12 '>
          {text}
        </h2> 
        {desc && <p>{desc}</p>}

        <div className='flex  flex-wrap gap-4 justify-center items-center'>
          <Button2
            text1={"Book a Demo"} 
            text2={"Explore Industry Solutions"}
          />
        </div>
      </blockquote>
    </div>
  )
}