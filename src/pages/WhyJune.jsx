import React from 'react'
import Card from '../component/Card';




const cards = [
   
    {
      id: 1,
      icon: "/Jet.svg",
      number: "01",
      title: "Build Faster",
      desc: "Transform your concept into a functional product at record speed with a streamlined process designed for clarity, collaboration, and rapid execution.",
    },
    {
      id: 2,
      icon: "/piggy.svg",
      number: "02",
      title: "Save Smarter",
      desc: "Slash infrastructure spending by up to 70% with optimized deployment and smarter resource management.",
    },
    {
      id: 3,
      icon: "/telegram.svg",
      number: "03",
      title: "Scale Seamlessly",
      desc: "Start small, scale big. From startup to enterprise, you get one powerful backbone to run your business seamlessly.",
    },
    {
      id: 4,
      icon: "/verified.svg",
      number: "04",
      title: "Stay Compliant",
      desc: "We treat compliance as the foundation, not a feature. NDPR, GDPR, ISO 27001, and PCI-DSS come built in to keep your data and users secure.",
    },
    
  ];

const WhyJune = () => {
  return (
    <div>
      <div className="h-max pt-20 flex items-center justify-center  px-20 max-lg:px-8 max-md:px-6 max-md:pt-10 text-center ">
          {/* Content */}
        <section className=" w-full font-inter space-y-4 mx-auto max-md:w-full">
            {/* header */}
          <div className=' flex flex-col items-center justify-center'>
            <p className="text-4xl font-extrabold max-md:text-4xl">Why June?</p>
            <p className='text-[18px]  max-md:text-[17px] font-normal my-5 max-lg:max-w-full max-w-[52%] '>
              With June, you gain more than technology. You gain a partner committed
              to powering transformation across the continent.
            </p>
          </div>

          <blockquote className='flex max-lg:flex-col max-lg:justify-center gap-[2%] max-lg:gap-7  max-md:gap-6'>
            <div className='w-[40%] max-lg:w-full max-lg:justify-center  pt-15 pl-10 max-md:py-5  max-md:gap-15  flex flex-col gap-30 bg-[#f4eeff]'>
              <p className='text-3xl font-bold text-start w-[340px] max-md:w-[260px] '>
                At June, we go beyond digital solutions. We create the backbone that Africa’s industries depend on. 
              </p>

              <button className='bg-black hover:scale-105 active:scale-95 cursor-pointer flex text-white text-sm py-4 px-4 justify-self-start w-max'>
                Book a Free Discovery Call
              </button>
            </div>

            <div className='w-[58%] max-lg:w-full max-md:w-full'>
              <img src="/Why.svg" alt="" />
            </div>
          </blockquote>

          {/* Card-box */}
          <div className="flex flex-wrap w-full gap-6 my-10">

            {/* Purple Card */}
            <div className="max-md:w-full rounded-lg p-6 hover:scale-105 active:scale-95 max-lg:w-[48%] w-[31%]  bg-[#a16afa]">
              <p className='text-start text-5xl font-black cursor-pointer text-white leading-15 mt-9'>
                Our <br />
                Major <br />d
                Highlights
              </p>
            </div>

            {/* Cards */}
            {cards.map((card) => (
              <div key={card.id} className="max-md:w-full cursor-pointer max-lg:w-[48%] w-[31%]">
                <Card
                  icon={card.icon}
                  number={card.number}
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            ))}

            {/* Purple Card */}
            <div className="max-md:w-full rounded-lg hover:scale-105 active:scale-95 p-6  max-lg:w-[48%] w-[31%]  bg-[#a16afa]">
              <p className='text-start text-sm text-white font-medium'>
                Let's worry about the execution,<br />
                while you focus on getting <br />
                impactful results.
              </p>

              <button className='bg-white cursor-pointer  hover:scale-105 active:scale-95 flex text-center text-sm py-3 px-10 max-lg:px-13 justify-self-start w-max relative mt-30' onClick={()=>{
                 alert("You've successfully booked a demo!");
              }}>
                Book a demo
              </button>
            </div>
            
          </div>
      
        </section>

      </div>
    </div>
  )
}

export default WhyJune