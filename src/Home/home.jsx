// import React from 'react'
// import Hero from '../pages/Hero';
// import WhyJune from '../pages/WhyJune';
// import Built from '../pages/Built';
// import Explore from '../pages/Explore';
// import Testimony from '../pages/Testimony';

// const MainHome = () => {
//   return (
//     <>
//       <Hero />
//       <div className='px-20 max-lg:px-8 max-md:px-6 '>
//         <WhyJune/>
//         <Built/>
//       </div>
//       <Testimony/>
//       <Explore/>
//     </>
//   )
// }

// export default MainHome

import React, { useState } from 'react';

// Card Component
const Card = ({ icon, number, title, desc }) => (
  <div className="bg-white rounded-lg p-6 hover:scale-105 active:scale-95 transition-all duration-200 h-full flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <img src={icon} alt={title} className="w-8 h-8" />
      <span className="text-gray-400 text-sm font-medium">{number}</span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

// Hero Component
const Hero = () => {
  return (
    // <div id="/" className="w-full min-h-screen bg-[#141414] relative overflow-hidden">
    //   <section className='flex justify-center items-center px-4 sm:px-6 lg:px-8'>
    //     <div className='min-h-screen pb-32 pt-24 md:pb-40 md:pt-32 flex flex-col justify-center text-center max-w-5xl w-full'>
    //       {/* Main Content */}
    //       <section className='w-full space-y-6 text-white relative z-10'>
    //         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight font-inter">
    //           Powering <br />
    //           Africa's Digital <br />
    //           Future
    //         </h1>

    //         <p className='text-base md:text-lg font-inter font-normal pb-4 md:pb-8'>
    //           Build, launch, and scale your business with June
    //         </p>
    //       </section>

    //       <article className='flex flex-col sm:flex-row justify-center items-center gap-3 text-sm md:text-base font-semibold mt-6 md:mt-8 relative z-10'>
    //         <button className='w-full sm:w-auto inline-block text-center hover:scale-105 active:scale-95 transition-all duration-100 cursor-pointer px-6 sm:px-8 py-3 md:py-4 bg-white'>
    //           Book a Demo
    //         </button>

    //         <button className='w-full sm:w-auto inline-block text-center hover:scale-105 active:scale-95 transition-all duration-100 cursor-pointer px-6 sm:px-8 py-3 md:py-4 bg-[#a16afa] text-white'>
    //           Start Building
    //         </button>
    //       </article>
    //     </div>

    //     {/* Background Image */}
    //     <img
    //       src="/Plug.svg"
    //       alt="plug background"
    //       className="absolute w-full h-auto object-contain object-bottom pointer-events-none z-0 bottom-0 max-h-[50vh] md:max-h-[60vh]"
    //     />
    //   </section>
    // </div>

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
  );
};

// WhyJune Component
const WhyJune = () => {
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

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className='flex flex-col items-center justify-center text-center mb-12 md:mb-16'>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Why June?</h2>
          <p className='text-base md:text-lg font-normal max-w-3xl'>
            With June, you gain more than technology. You gain a partner committed
            to powering transformation across the continent.
          </p>
        </div>

        {/* Blockquote Section */}
        <div className='flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16'>
          <div className='w-full lg:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-[#f4eeff] rounded-lg'>
            <p className='text-2xl md:text-3xl font-bold text-start'>
              At June, we go beyond digital solutions. We create the backbone that Africa's industries depend on.
            </p>

            <button className='bg-black hover:scale-105 active:scale-95 cursor-pointer text-white text-sm py-3 px-6 w-fit'>
              Book a Free Discovery Call
            </button>
          </div>

          <div className='w-full lg:w-3/5'>
            <img src="/Why.svg" alt="Why June" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Card Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Purple Card - Our Major Highlights */}
          <div className="rounded-lg p-6 md:p-8 hover:scale-105 active:scale-95 transition-all duration-200 bg-[#a16afa] flex items-center justify-center min-h-[200px]">
            <p className='text-4xl md:text-5xl font-black cursor-pointer text-white leading-tight'>
              Our <br />
              Major <br />
              Highlights
            </p>
          </div>

          {/* Feature Cards */}
          {cards.map((card) => (
            <div key={card.id} className="cursor-pointer">
              <Card
                icon={card.icon}
                number={card.number}
                title={card.title}
                desc={card.desc}
              />
            </div>
          ))}

          {/* Purple Card - Book a Demo */}
          <div className="rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 p-6 md:p-8 bg-[#a16afa] flex flex-col justify-between min-h-[200px]">
            <p className='text-sm md:text-base text-white font-medium mb-6'>
              Let's worry about the execution,<br />
              while you focus on getting <br />
              impactful results.
            </p>

            <button 
              className='bg-white cursor-pointer hover:scale-105 active:scale-95 text-center text-sm py-3 px-8 w-fit' 
              onClick={() => {
                alert("You've successfully booked a demo!");
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Built Component
const Built = () => {
  return (
    <div className='w-full py-12 md:py-16'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className='mb-8 md:mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-black leading-tight mb-4'>
            Built for Founders, SMEs, and Enterprises
          </h2>
          <p className='font-normal text-base md:text-lg leading-relaxed max-w-3xl'>
            A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
          </p>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="rounded-lg overflow-hidden">
            <img src="/founder2.svg" alt="Founders" className="w-full h-full object-cover" />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="/Sme.svg" alt="SMEs" className="w-full h-full object-cover" />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="/enterprise.svg" alt="Enterprises" className="w-full h-full object-cover" />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="/image.svg" alt="Solutions" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimony Component
const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Q.",
      role: "CTO, Novatech Group",
      text: "For us, compliance is critical. June impressed us with how NDPR, GDPR, ISO 27001, and PCI-DSS are built into the platform by design. It reduced our audit workload significantly, and our engineering team finds the system incredibly easy to navigate.",
      userIcon: "/user.svg",
    },
    {
      name: "Habeeb",
      role: "Entrepreneur",
      text: "June helped us launch our fintech MVP in 3 weeks — no code, no CTO, just impact",
      userIcon: "/user.svg",
    },
    {
      name: "Emeka I.",
      role: "Head of Product, Credify",
      text: "Our development cycles are faster and smoother. Deployments, monitoring, and testing are all streamlined, and we can release updates with confidence. June has become an essential part of our product workflow.",
      userIcon: "/user.svg",
    },
    {
      name: "Tosin O.",
      role: "Founder, PayLoop",
      text: "June helped us move from idea to a working MVP in just weeks. We didn't have to deal with DevOps or infrastructure at all—the platform handled deployments, scaling, and monitoring automatically. Now we're serving thousands of users, and June has made it possible to focus entirely on building and improving our product",
      userIcon: "/user.svg",
    },
    {
      name: "Sarah M.",
      role: "Operations Lead, RetailHub",
      text: "Before June, our infrastructure was expensive and inconsistent. After switching, we cut costs by over 60% and our app became noticeably faster and more stable. June made everything simpler, and their support feels genuinely invested in our success.",
      userIcon: "/user.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#f4f3ff] py-12 md:py-20">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='relative mx-auto w-full flex justify-center items-center mb-8 md:mb-12'>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center font-inter">
            What They Say About June
          </h2>
          <img
            src="/spark.svg"
            alt="spark decoration"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-24 md:w-40 lg:w-60 opacity-50"
          />
        </div>

        {/* Testimonial Cards */}
        <div className="w-full overflow-hidden mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white p-6 rounded-3xl flex flex-col hover:shadow-lg transition-all duration-200 min-h-[280px]"
              >
                {/* Quote Icon */}
                <img
                  src="/quotes.svg"
                  alt="quotes"
                  className="w-8 h-8 mb-4"
                />
                
                {/* Testimonial Text */}
                <p className="text-black text-sm font-normal leading-relaxed mb-4 flex-grow">
                  {item.text}
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <img
                    src={item.userIcon}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-xs font-medium text-[#a16afa]">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <aside className='w-full flex justify-between items-center'>
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-gray-700 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <img src="/Arrow Previous.svg" alt="Previous" className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <img src="/Arrow Previous.svg" alt="Next" className="w-6 h-6 scale-x-[-1]" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

// Explore Component
const Explore = () => {
  return (
    <div className='relative min-h-[400px] flex w-full text-white py-16 md:py-20 bg-black justify-center items-center overflow-hidden'>
      {/* Background Image */}
      <img
        src="/Explore-vector.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-30"
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 md:gap-10 text-center items-center'>
          <h2 className='font-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl'>
            Ready to Explore What June Can Do?
          </h2>
          
          <div className='flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 justify-center items-center text-sm md:text-base lg:text-lg'>
            <a href="#solutions" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ffffff80] transition-colors'>
              Explore Solutions
            </a>
            <a href="#docs" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ffffff80] transition-colors'>
              See Developer Docs
            </a>
            <a href="#contact" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 transition-colors'>
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// MainHome Component
const MainHome = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
        <WhyJune />
        <Built />
      </div>
      <Testimony />
      <Explore />
    </div>
  );
};

export default MainHome;