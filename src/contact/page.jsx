// import { useState } from 'react'

import { CorePillars } from "../component/Card"
import { ExploreWithButton } from "../pages/Explore"

const Contact = () => {
  return (
    <>
    <div className="bg-[rgba(161,106,250,0.1)] pb-20 pt-10 font-inter px-20 max-md:px-6 h-screen max-md:h-max max-md:pb-8">
        <h1 className="text-7xl font-inter text-black my-15 font-black  max-md:text-6xl">
          Contact Us
        </h1>

        <section className="flex bg-white gap-6 justify-self-center w-290 max-md:flex-col max-md:w-[380px] max-md:items-center max-md:gap-4 max-lg:flex-col max-lg:w-150 max-lg:items-center">
            <div className="bg-black p-6 overflow-hidden relative h-100 w-[50%] text-white max-lg:w-full">
              <img 
                src="/contact_vector.svg" 
                alt="image" 
                className="absolute right-0 top-0 w-60"
              />
              <span className="text-5xl w-65 mt-45 leading-[50px] inline-block pb-4 font-bold">
                Let's Build The Future Together.
              </span>
              <p className="text-[13px]">Get in touch and let June accelerate your business</p>
            </div>

            <form className="flex flex-col gap-4 px-10 pt-15 font-light text-[#939393] w-[50%] max-md:pt-6 max-md:px-6 max-md:pb-10 max-lg:pt-6 max-lg:w-full">
              <div>
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  name="name"
                  className="border-b-2 border-gray-400 block w-full h-10 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="border-b-2 border-gray-400 block w-full h-10 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                
                <textarea
                  type="text"
                  name="name"
                  placeholder="Type your requests or enquiries here..."
                  className="border-b-2 border-gray-400 block w-full h-25 focus:outline-none focus:border-black"
                ></textarea>
              </div>

              <button type="submit" className="bg-[rgba(161,106,250,1)] py-2 px-4 text-white w-max text-[12px] max-lg:my-4">Submit</button>

            </form>
        </section>
      </div>

        <div className="grid grid-cols-3 py-12 px-25 gap-12 bg-[rgba(161,106,250,0.1)] max-md:grid-cols-1 max-md:px-15 max-md:py-6 max-lg:grid-cols-1">
              <CorePillars
                imgBg={"bg-[rgba(161,106,250,1)]"}
                imgPath={"/contact_message.svg"}
                title={"Email"}
                text={"info@juneinfra.com"}
              />
              <CorePillars
                imgBg={"bg-[rgba(161,106,250,1)]"}
                imgPath={"/contact_message.svg"}
                title={"Partnership"}
                text={"partnership@juneinfra.com"}
              />
              <CorePillars
                imgBg={"bg-[rgba(161,106,250,1)]"}
                imgPath={"/contact_phone.svg"}
                title={"Contact"}
                text={"+2348031234567"}
              />
            </div>

            <ExploreWithButton
              text={"Ready to Get Started?"}
              desc={"Book a consultation with our team to discuss how June can transform your business."}
              text1={"Book a Consultation"}
              text2={"Join Our Partner Network"}

            />
    </>
  )
}

export default Contact