import React from "react";
import Foodery from "../assets/foodery.jpg";
import Weather from "../assets/weather.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-grey-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600">
            Work
          </p>
          <p className="py-6 text-gray-300">
            {" "}
            Check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Foodery})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="http://tonny-s-foodery.web.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tonny-G/FoodCommunityProject/tree/main"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
