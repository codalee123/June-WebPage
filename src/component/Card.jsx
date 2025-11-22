import React from 'react'

const Card = ({icon,number,title,desc}) => {

  return (
    <div className="w-full h-full bg-[#a16afa0d] rounded-lg hover:shadow-sm hover:scale-105 active:scale-95  p-6 relative ">

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className="h-[23%] w-[16%]  absolute top-4 right-4"
        />

      <div className='text-start mt-20'>
        {/* Number */}
        <p className="text-sm font-light text-purple-400 mt-10">{number}</p>

        {/* Title */}
        <h3 className="text-xl font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[rgba(0,0,0,1)] text-[14px] font-light mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Card

export const CorePillars = ({imgBg, imgPath, title, text, cardBg="bg-white"}) => {
 return(
  <section className={`${cardBg} rounded-md flex flex-col items-center text-center px-6 py-4 gap-2.5`}>
    <div className={`${imgBg} rounded-[50%] h-12 justify-center flex items-center w-12`}>
      <img src={imgPath} alt='vectorImg' />
    </div>

    <h1 className='font-bold text-l'>{title}</h1>
    <span className='text-gray-600 text-[13px]'>{text}</span>
  </section>
 )
}

export const Card2 =({icon,role,title,desc})=>{
  return (
    <div className="w-full h-full bg-[#a16afa0d] rounded-lg  flex flex-col hover:shadow-sm hover:scale-105 active:scale-95  p-6 relative ">

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className="h-[23%] w-[16%]  absolute top-4 left-4"
        />

      <div className='text-start my-15'>

        {/* Title */}
        <h3 className="text-xl font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[rgba(0,0,0,1)] text-[14px] font-light mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
      
        {/* Role */}
        <p className="text-sm font-bold text-purple-400 mt-auto">{role}</p>
      
    </div>
  )

}

export const Card3 = ({icon,title,desc})=>{
  return(
    <div className="w-full h-48 bg-[#fbf8ff] rounded-lg  flex flex-col  p-6 relative ">

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className=" absolute top-4 w-12 h-12 left-6"
        />

      <div className='text-start my-15'>

        {/* Title */}
        <h3 className="text-[18px] font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[#64728f] text-[13px] font-normal mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
      
    </div>
  )
}