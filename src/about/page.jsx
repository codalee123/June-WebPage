import React from "react";

const About = () => {
 return (
  <div>
   <section className="bg-[#141414] relative w-full h-screen flex gap-20 px-25 items-center max-lg:flex-col max-lg:items-start">
    <div className="text-6xl w-120 h-max  text-white font-bold  font-inter max-md:text-5xl max-lg:text-8xl">
     Africa's <br /> Cloud Backbone for Builders and Businesses
    </div>
    <div className="h-100 w-120">
     <img src="/about_hero.svg" alt="hero_img" />
    </div>
   </section>

   <section className="bg-white w-200 mx-auto">
    <div className="flex justify-between bg-[#F4F3FF] h-80 mt-15">
     <div className="flex flex-col py-10 pl-10 w-145 gap-8">
      <div>
       <div className="flex items-center gap-2">
        <span className="border-blue-950 w-8 border-b-2 inline-block"></span>{" "}
        OUR MISSION{" "}
       </div>
       <p className="font-bold pl-10">
        Provide founders and businesses with secure, high performance digital
        infrastructure to build, launch, and scale their businesses without
        starting from scratch.
       </p>
      </div>
      <div>
       <div className="flex items-center gap-2">
        <span className="border-blue-950 w-8 border-b-2 inline-block"></span>{" "}
        OUR VISION{" "}
       </div>
       <p className="font-bold pl-10">
        To power Africa’s future by providing the scalable technology
        infrastructure every founder, small business, and enterprise needs to
        thrive.
       </p>
      </div>
     </div>
     <img src="about_vector.svg" alt="vector" className="h-[100%]" />
    </div>

     <div className="mt-20 flex justify-between gap-8">
       <div className="w-[20rem]">
        <img src="/about_story.svg" alt="image"/>
       </div>
       <article className="w-[20rem] text-[11px] text-gray-600">
         <h1 className="font-bold text-2xl text-black">Our Story</h1>
         <p>June was born from a simple truth. Founders and businesses spend too much time and money building core digital infrastructure, including but no limited to payments, identity, workflows, CRM, and compliance. Core systems should accelerate growth, enable scaling and let you focus on your customers.</p>

         <p className="mt-4">
           June is a cloud-native platform that acts as the invisible CTO for Africa's businesses. Launch any venture with ready-made  APIs, plug and play modules and enterprise-grade security, so you can scale confidently and delight your customers, without rebuilding core infrastructure.
         </p>
       </article>
     </div>
   </section>
  </div>
 );
};

export default About;
