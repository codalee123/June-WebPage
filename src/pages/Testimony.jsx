import React from 'react'

const Testimony = () => {

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
      <section className="w-full bg-[#f4f3ff] flex flex-col items-center">

          <div className='2xl:w-400 2xl:justify-self-center'>
            <div className='relative mx-auto w-full max-md:mx-auto max-w-232  flex justify-center items-center mt-10 mb-10'>
              <h2 className="text-6xl max-lg:text-[45px] font-black text-center font-inter max-md:mb-0 mb-20 pt-20">
                What They Say About June
              </h2>
              <img
                src="/spark.svg"
                alt=""
                className="absolute  right-0 top-1/2 max-md:top-[60%] -translate-y-1/2 w-60 max-md:w-35"
              />
            
            </div>
            {/* Cards */}
            <div className="w-full overflow-hidden">
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
            {/* SCROLL-ELEMENT */}
            <aside className='w-full flex justify-between px-10 max-md:px-6 my-10'>
                {/* Pagination Dots */}
              <div className="flex items-center   gap-2 ">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
              </div>
                {/* Arrows */}
              <div className="flex ">
                <span >
                  <img src="/Arrow Previous.svg" className="w-full" />
                </span>
                <span >
                  <img src="/Arrow Previous.svg" className="w-full scale-x-[-1]" />
                </span>
              </div>
            </aside>
          </div>
    </section>
  )
}

export default Testimony