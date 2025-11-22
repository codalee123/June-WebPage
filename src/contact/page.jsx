// import { useState } from 'react'

import { CorePillars } from "../component/Card"

const Contact = () => {
  return (
    <>
    <div className="bg-[rgba(161,106,250,0.1)] pb-[5rem] pt-10 px-20 h-screen">
        <h1 className="text-5xl text-black py-6 font-black">Contact Us</h1>

        <section className="flex bg-white gap-6 justify-self-center w-290">
            <div className="bg-black p-6 overflow-hidden relative h-100 w-[50%] text-white">
              <img 
                src="/contact_vector.svg" 
                alt="image" 
                className="absolute right-0 top-0 w-[15rem]"
              />
              <span className="text-5xl w-60 mt-45 inline-block pb-4">Let's Build The Future Together.</span>
              <p className="text-[13px]">Get in touch and let June accelerate your business</p>
            </div>

            <form className="flex flex-col gap-4 px-10 pt-15 text-gray-400 w-[50%] bg-red-500">
              <div>
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  name="name"
                  className="border-b-2 border-gray-400 block w-[100%]"
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="border-b-2 border-gray-400 block w-[100%]"
                />
              </div>
              <div>
                
                <textarea
                  type="text"
                  name="name"
                  placeholder="Type your requests or enquiries here..."
                  className="border-b-2 border-gray-400 block w-[100%]"
                ></textarea>
              </div>

              <button type="submit" className="bg-[rgba(161,106,250,1)] p-2 text-white w-max text-[12px]">Submit</button>

            </form>
        </section>
      </div>

        <div className="grid grid-cols-3 py-12 px-25 gap-12 bg-[rgba(161,106,250,0.1)] ">
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
    </>
  )
}

export default Contact