import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import vercel from '../assets/vercel.svg'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
      {/**container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Skills
          </p>
          <p className="py-4">Below are technologies I'm proficient in:</p>
        </div>
        {/**icons container */}
        <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p>HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p>CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p>JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p>REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p>TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={firebase} alt="HTML icon" />
            <p>FIREBASE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="HTML icon" />
            <p>GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={vercel} alt="HTML icon" />
            <p>VERCEL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills