import React from "react";
import Explore from "../pages/Explore";
import Card from "../component/Card";

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
      <section className="relative flex justify-center items-center bg-[#141414] text-white py-28 px-6 md:py-32">
        <div className="max-w-5xl text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Powering <br /> Africa’s Digital <br /> Future
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
            Build, launch, and scale your business with June
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-4 py-3 bg-white text-black hover:scale-105 active:scale-95 transition">
              Book a Demo
            </button>
            <button className="px-4 py-3 bg-[#a16afa] text-white hover:scale-105 active:scale-95 transition">
              Start Building
            </button>
          </div>
        </div>
        <img
          src="/Plug.svg"
          alt="Hero illustration"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 object-contain"
        />
      </section>

      {/* WHY JUNE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Why June?</h2>
        <p className="text-[16px] md:text-[18px] font-normal my-5 max-w-full md:max-w-[52%]">
          With June, you gain more than technology. You gain a partner committed to powering transformation across the continent.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#f4eeff] p-8 sm:p-10 text-left rounded-lg">
            <p className="text-2xl sm:text-3xl font-bold">
              At June, we go beyond digital solutions. We create the backbone that Africa’s industries depend on.
            </p>
            <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded">
              Book a Free Discovery Call
            </button>
          </div>
          <img src="/Why.svg" alt="Why June" className="w-full h-auto rounded-lg" />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#a16afa] p-6 rounded-lg hover:scale-105 active:scale-95 transition">
            <p className="text-3xl sm:text-5xl font-black text-white leading-snug">
              Our <br /> Major <br /> Highlights
            </p>
          </div>

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

          <div className="bg-[#a16afa] p-6 rounded-lg hover:scale-105 active:scale-95 transition">
            <p className="text-sm text-white font-medium">
              Let's worry about the execution,<br />while you focus on getting <br /> impactful results.
            </p>
            <button
              className="mt-6 px-4 py-2 bg-white text-black hover:scale-105 active:scale-95 transition"
              onClick={() => alert("You've successfully booked a demo!")}
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl md:text-3xl font-black">Built for Founders, SMEs, and Enterprises</h3>
        <p className="mt-4 max-w-full md:max-w-2xl">
          A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
        </p>
        <div className="flex flex-wrap w-full gap-0 justify-center my-10 max-md:gap-y-5">
          <img src="/founder2.svg" className="w-55 max-md:w-2/5 max-lg:w-65 rounded-lg" />
          <img src="/Sme.svg" className="w-55 max-md:w-2/5 max-lg:w-65 rounded-lg" />
          <img src="/enterprise.svg" className="-ml-4 w-55 max-md:w-2/5 max-lg:w-65 rounded-lg" />
          <img src="/image.svg" className="w-55 max-md:w-2/5 max-lg:w-65 rounded-lg" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f4f3ff] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">What They Say About June</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white p-4 rounded-3xl flex flex-col hover:shadow-lg transition-all duration-200"
              >
                <img src="/quotes.svg" alt="testimony icon" className="w-8 h-8 mb-4" />
                <p className="text-black text-[12px] sm:text-sm font-normal mb-4 wrap-break-words">
                  {item.text}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img src={item.userIcon} alt={item.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-medium text-[#a16afa]">
                      {`${item.name} ${item.role}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Explore />
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