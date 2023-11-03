import React from 'react'
import {  HiArrowNarrowRight } from 'react-icons/hi';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
    <Navbar/>
      {/*container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-600 text-xl">Hi, my name is</p>
        <h1 className=" text-4xl sm:tetx-7xl font-bold text-[#ccd6f6]">
          Macharia Tonny
        </h1>
        <h2 className="text-4xl sm:Text-7xl font-bold text-[#8892b0] ">
          I am a Full Stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer specializing in developing (and
          occasionally designing) exceptional web applications and other digital
          experiences. I am currently focused on building responsive full-stack
          web applications
        </p>
        <div>
          <button className="text-white group border-2 py-4 px-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
            View work
            <span className='ml-3 flex group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home