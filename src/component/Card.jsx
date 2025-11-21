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