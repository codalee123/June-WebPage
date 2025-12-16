import React from "react";
import Explore from "../pages/Explore";

const MainHome = () => {
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

  const testimonials = [
  {
    name: "Alex Q.",
    role: "CTO, Novatech Group",
    text: "For us, compliance is critical. June impressed us with how NDPR, GDPR, ISO 27001, and PCI-DSS are built into the platform by design. It reduced our audit workload significantly, and our engineering team finds the system incredibly easy to navigate.",
    userIcon: "/user.svg", // replace with your user image
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
    text: "June helped us move from idea to a working MVP in just weeks. We didn’t have to deal with DevOps or infrastructure at all—the platform handled deployments, scaling, and monitoring automatically. Now we’re serving thousands of users, and June has made it possible to focus entirely on building and improving our product",
    userIcon: "/user.svg",
  },

  {
    name: "Sarah M.,",
    role: "Operations Lead, RetailHub",
    text: "Before June, our infrastructure was expensive and inconsistent. After switching, we cut costs by over 60% and our app became noticeably faster and more stable. June made everything simpler, and their support feels genuinely invested in our success.",
    userIcon: "/user.svg",
  },
];

  return (
    <main className="overflow-x-hidden font-inter">
      {/* HERO */}
      <section className="relative flex justify-center items-center bg-[#141414] text-white py-32">
        <div className="max-w-5xl text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Powering <br /> Africa’s Digital <br /> Future
          </h1>
          <p className="mt-6 text-base">Build, launch, and scale your business with June</p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black">Book a Demo</button>
            <button className="px-8 py-4 bg-[#a16afa]">Start Building</button>
          </div>
        </div>
        <img src="/Plug.svg" className="absolute inset-x-0 bottom-0 w-full object-contain" />
      </section>

      {/* WHY JUNE */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-black">Why June?</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          With June, you gain more than technology. You gain a partner committed to powering transformation across the continent.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#f4eeff] p-10 text-left">
            <p className="text-3xl font-bold">
              At June, we go beyond digital solutions. We create the backbone that Africa’s industries depend on.
            </p>
            <button className="mt-8 px-6 py-3 bg-black text-white">Book a Free Discovery Call</button>
          </div>
          <img src="/Why.svg" className="w-full" />
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="max-md:w-full rounded-lg p-6 hover:scale-105 active:scale-95  bg-[#a16afa]">
              <p className='text-start text-5xl font-black cursor-pointer text-white leading-15 mt-9'>
                Our <br />
                Major <br />
                Highlights
              </p>
            </div>

          {cards.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-lg shadow">
              <img src={c.icon} className="w-10 mb-4" />
              <p className="font-bold">{c.title}</p>
              <p className="text-sm mt-2">{c.desc}</p>
            </div>
          ))}

          <div className="max-md:w-full rounded-lg hover:scale-105 active:scale-95 p-6 bg-[#a16afa]">
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

      {/* BUILT FOR */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-black">Built for Founders, SMEs, and Enterprises</h3>
        <p className="mt-4 max-w-2xl">
          A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <img src="/founder2.svg" className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]" />
          <img src="/Sme.svg" className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]"/>
          <img src="/enterprise.svg" className="-ml-14 max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]"/>
          <img src="/image.svg" className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]"/>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f4f3ff] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className='relative mx-auto w-full max-md:mx-auto max-w-232  flex justify-center items-center mt-10 mb-10'>
            <h2 className="text-4xl font-black text-center mb-16">What They Say About June</h2>
              <img
                src="/spark.svg"
                alt=""
                className="absolute right-0 top-1/2 max-md:top-[60%] -translate-y-2/3 -translate-x-3/8 w-60 max-md:w-35"
              />
          </div>
          <div className="grid grid-cols-1 mx-2 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="w-full bg-white p-4 rounded-3xl flex-col flex  hover:shadow-lg transition-all duration-200 "
                  >
                    {/* Top Icon */}
                    <img
                      src="/quotes.svg"
                      alt="testimony icon"
                      className="w-8 h-8 mb-4"
                    />
                    {/* Text */}
                    <p className="text-black text-[12px] font-normal leading-relaxed mb-4">
                      {item.text}
                    </p>
                    {/* User Info */}
                    <div className="flex items-center gap-3 mt-auto pt-6">
                      <img
                        src={item.userIcon}
                        alt=""
            
                      />
                      <div >
                        <div className="text-[10px] font-medium text-[#a16afa]">
                          {`${item.name} ${item.role} ` }
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <Explore/>
    </main>
  );
};

export default MainHome;










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
//       <div className='w-full mx-auto lg:px-8 px-20 max-lg:px-8 max-md:px-6 2xl:flex 2xl:flex-col 2xl:justify-self-center 2xl:justify-center 2xl:items-center'>
//         <WhyJune/>
//         <Built/>
//       </div>
//       <Testimony/>
//       <Explore/>
//     </>
//   )
// }

// export default MainHome