import React from "react";
import { CorePillars } from "../component/Card";

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

   <section className="bg-white w-full flex flex-col justify-center items-center">
    <div className="flex justify-between w-full max-w-250 bg-[#F4F3FF] h-80 mt-15">
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

     <div className="mt-20 flex  w-full max-w-250 justify-between gap-8">
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

     <div className="grid grid-cols-4 gap-10 w-full max-w-250 py-20">
       <CorePillars 
        imgBg={"bg-[rgba(166,26,230,0.1)]"}
        imgPath={"/about_speed.svg"}
        title={"Speed"}
        text={"Launch products in weeks not months."}
        cardBg="bg-[rgba(244,246,246,1)]"
       />
       <CorePillars 
        imgBg={"bg-[rgba(12,166,60,0.1)]"}
        imgPath={"/about_affordability.svg"}
        title={"Affordability"}
        text={"Cut dev and infrastructure costs by 60-70%."}
        cardBg="bg-[rgba(244,246,246,1)]"
       />
       <CorePillars 
        imgBg={"bg-[rgba(37,99,235,0.1)]"}
        imgPath={"/about_scalability.svg"}
        title={"Scalability"}
        text={"From MVP to enterprise, grow without rebuilding."}
        cardBg="bg-[rgba(244,246,246,1)]"
       />
       <CorePillars 
        imgBg={"bg-[rgba(230,12,12,0.1)]"}
        imgPath={"/about_trust.svg"}
        title={"Trust"}
        text={"Compliance and security at every layer."}
        cardBg="bg-[rgba(244,246,246,1)]"
       />
      
     </div>
   </section>
  </div>
 );
};

export default About;
