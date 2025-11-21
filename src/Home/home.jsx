import React from 'react'
import Hero from '../pages/Hero';
import WhyJune from '../pages/WhyJune';
import Built from '../pages/Built';
import Explore from '../pages/Explore';
import Testimony from '../pages/Testimony';

const MainHome = () => {
  return (
    <div>
      <Hero />
      <WhyJune/>
      <Built/>
      <Testimony/>
      <Explore/>
    </div>
  )
}

export default MainHome