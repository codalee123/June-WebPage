import React from "react";
import { CorePillars } from "../component/Card";
import { ExploreWithoutButton } from "../pages/Explore";

const About = () => {
  return (
    <div className="overflow-hidden font-inter">

      {/* HERO SECTION */}
      <section className="bg-[#141414] w-full min-h-screen flex items-center justify-between px-24 py-20 gap-20 max-lg:flex-col max-lg:text-center max-lg:px-10">
        <h1 className="text-white text-6xl font-extrabold leading-tight max-md:text-4xl max-lg:text-5xl">
          Africa's <br /> Cloud Backbone for Builders and Businesses
        </h1>
        <div className="w-[450px] max-md:w-[300px] max-lg:w-[380px]">
          <img src="/about_hero.svg" alt="hero_img" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="bg-white flex justify-center py-20 px-4">
        <div className="flex bg-[#F4F3FF] rounded-xl shadow-sm w-full max-w-5xl p-12 gap-10 max-lg:flex-col max-lg:text-center relative">
          <div className="flex flex-col gap-10 flex-1">
            <div>
              <span className="flex items-center gap-2 text-sm font-semibold">
                <span className="border-[#a16afa] w-8 border-b-2"></span>
                OUR MISSION
              </span>
              <p className="font-bold mt-3 text-gray-800 text-lg max-md:text-base">
                Provide founders and businesses with secure, high‑performance digital infrastructure to build, launch, and scale without starting from scratch.
              </p>
            </div>

            <div>
              <span className="flex items-center gap-2 text-sm font-semibold">
                <span className="border-[#a16afa] w-8 border-b-2"></span>
                OUR VISION
              </span>
              <p className="font-bold mt-3 text-gray-800 text-lg max-md:text-base">
                To power Africa’s future by providing the scalable technology infrastructure every founder, small business, and enterprise needs to thrive.
              </p>
            </div>
          </div>

          <img
            src="about_vector.svg"
            alt="vector"
            className="h-full w-auto max-lg:mx-auto max-md:rotate-90"
          />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="flex justify-center py-20 px-4 bg-white">
        <div className="flex items-center gap-16 max-w-5xl w-full max-lg:flex-col max-lg:text-center">
          <div className="w-[320px] max-md:w-[250px]">
            <img src="/about_story.svg" alt="story" className="w-full object-contain" />
          </div>
          <article className="flex-1 text-gray-700 text-[15px] leading-relaxed max-md:text-[14px]">
            <h1 className="font-bold text-3xl text-black mb-4">Our Story</h1>
            <p>
              June was born from a simple truth: founders and businesses spend too much time and money building core digital infrastructure — payments, identity, workflows, CRM, compliance, and more. Core systems should accelerate growth, not slow you down.
            </p>
            <p className="mt-4">
              June is a cloud‑native platform that acts as the invisible CTO for Africa's businesses. Launch any venture with ready‑made APIs, plug‑and‑play modules, and enterprise‑grade security — so you can scale confidently without rebuilding infrastructure.
            </p>
          </article>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 bg-white">
        <h2 className="text-center text-4xl font-bold mb-16">Core Pillars</h2>
        <div className="grid grid-cols-4 gap-10 max-w-5xl mx-auto max-lg:grid-cols-2 max-md:grid-cols-1">
          <CorePillars
            imgPath="/Speed.svg"
            title="Speed"
            text="Launch products in weeks, not months."
            cardBg="bg-[#f4f6f6]"
          />
          <CorePillars
            imgPath="/Affordability.svg"
            title="Affordability"
            text="Cut dev and infrastructure costs by 60–70%."
            cardBg="bg-[#f4f6f6]"
          />
          <CorePillars
            imgPath="/Scalability.svg"
            title="Scalability"
            text="Grow from MVP to enterprise without rebuilding."
            cardBg="bg-[#f4f6f6]"
          />
          <CorePillars
            imgPath="/Trust.svg"
            title="Trust"
            text="Compliance and security at every layer."
            cardBg="bg-[#f4f6f6]"
          />
        </div>
      </section>

      {/* PROMISE SECTION */}
      <ExploreWithoutButton
        text="Our Promise"
        desc="June is building the digital backbone for Africa's next billion‑dollar companies."
      />
    </div>
  );
};

export default About;
