import React from 'react'

const Built = () => {
  return (
    <div>
      <div className='h-max py-8 px-20'>

        {/* Content-section */}
        <header className=' max-w-125 max-md:max-w-80'>
          <p className='text-[33px] text-black font-black leading-[38px] max-md:text-[26px] max-md:leading-7  '>
            Built for Founders, SMEs, and Enterprises
          </p>
          <p className='font-normal text-[15px] max-md:text-[15px] max-md:leading-7 mt-4'>
            A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
          </p>
        </header>

        {/* Image-section */}
        <div className="flex flex-wrap w-full gap-0 justify-center my-10 max-md:gap-y-5">
          <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]">
            <img src="/founder2.svg" alt="" />
          </div>

          <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%] ">
            <img 
            src="/Sme.svg" 
            alt="" 
            />
          </div>

          <div className="-ml-14 max-md:w-[50%] max-md:ml-0 rounded-lg max-lg:w-[20%] max-lg:-ml-8 w-[20%] ">
            <img 
            src="/enterprise.svg" 
            alt="" 
            />
          </div>

          <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%] ">
            <img 
            src="/image.svg" 
            alt="" 
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Built