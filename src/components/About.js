import React from 'react'
import image from '../assets/img/houses/Home.jpg';
function About() {
  return (
    <div className='h-screen  max w-[1320px] md:py[80] py-5 flex mx-auto sm:flex-row flex-col '>
      <div className='basis-[45%] pb-5'>
       <img className='w-full' src={image} alt="/"/>
    </div>
    <div className='basis-[55%] px-5'>
    <h1 className='text-4xl  font-semibold leading-none mb-6'>
            <span className='text-violet-700'>About</span>Us
          </h1>
          <p className='text-l'>
          At <span className='text-violet-700 font-semibold'>CloudRealEstate.com</span> our purpose is to empower people by making property simple, 
          efficient and stress free. Whether you’re just beginning your property journey or have had years of experience, 
          <span className='text-violet-700 font-semibold'>CloudRealEstate.com</span> is the number one place for people to come together to explore.
          </p>
    </div>
    </div>
  )
}

export default About;