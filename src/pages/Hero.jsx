import React from 'react'

const Hero = () => {
  return (
      <div id="/"
      className=" h-screen  bg-[#141414] relative flex  items-center justify-center "
     
      >

        <div className='h-max py-50 flex flex-col justify-center text-center'>
          {/* Main Content */}
          <section className=' w-full max-w-5xl space-y-4  text-white'>
            <div className="text-9xl font-black  font-inter max-md:text-5xl max-lg:text-8xl lg:leading-[100%]">
              Powering <br />
              Africa’s Digital <br />
              Future
            </div>

            <p className='text-[16px] font-inter font-normal pb-8'>
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

        <div className='absolute h-full inset-0 bottom-0'
            style={{
              backgroundImage: 'url("/Plug.svg")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom ",
              overflow: "hidden"
          
            }}
          >
            
          </div>
        
      </div>
  )
}

export default Hero