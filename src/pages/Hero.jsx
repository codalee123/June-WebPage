import React from 'react'

const Hero = () => {
  return (
      <div id="/"
      className="w-full h-max bg-[#141414] relative"
      >
        <section className='flex justify-center items-center'>

        <div className='h-max pb-50 pt-30 max-md:pb-30 flex flex-col justify-center text-center'>
          {/* Main Content */}
          <section className='w-full max-w-5xl space-y-4  text-white'>
            <div className="text-8xl font-black lg:leading-[100%] font-inter max-lg:text-8xl max-md:text-[45px] ">
              Powering <br />
              Africa’s Digital <br />
              Future
            </div>

            <p className='text-base font-inter font-normal pb-8'>
              Build, launch, and scale your business with June
            </p>

          </section>

          <article className='flex justify-center items-center gap-3 text-base max-md:text-[12px] font-semibold max-md:mt-10 max-xsm:mt-2 max-lg:mt-18'>
            <button className='relative z-20 inline-block text-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-8 py-4 bg-white w-max max-md:w-max max-sm:py-3 max-sm:px-7 '>
              Book a Demo
            </button>

            <button className='relative z-20 inline-block text-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-8 py-4 bg-[#a16afa] text-white w-max max-md:w-max max-sm:py-3 max-sm:px-7  '>
              Start Building
            </button>
          </article>

        </div>  

        {/* 🔌 Background Image */}
        <img
          src="/Plug.svg"
          alt="plug background"
          className="
            absolute
            w-full 
            h-max
            object-contain
            object-bottom
            pointer-events-none
            z-0
            bottom-0
            max-md:object-cover
            max-md:h-[55%]
          "
        />       
        </section> 
      </div>
  )
}

export default Hero