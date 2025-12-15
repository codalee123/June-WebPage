import React from 'react'
import Hero from '../pages/Hero';
import WhyJune from '../pages/WhyJune';
import Built from '../pages/Built';
import Explore from '../pages/Explore';
import Testimony from '../pages/Testimony';

const MainHome = () => {
  return (
    <>
      <Hero />
      <div className='max-w-7xl mx-auto lg:px-8 px-20 max-lg:px-8 max-md:px-6 2xl:flex 2xl:flex-col 2xl:justify-self-center 2xl:justify-center 2xl:items-center'>
        <WhyJune/>
        <Built/>
      </div>
      <Testimony/>
      <Explore/>
    </>
  )
}

export default MainHome