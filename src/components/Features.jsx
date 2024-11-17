import React from "react";

import { FaReact } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LiaMobileAltSolid } from "react-icons/lia";
import { TbBrandTorchain } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className="container p-6 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="mb-16 text-center">
        <h2 className="text-base font-semibold tracking-wide text-white uppercase">
          Features
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Learn & Grow with Technology
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1: Web Development */}
        <div className="w-full p-8 border-2 border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:text-white hover:bg-indigo-800 text-blue-600  sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <FaReact className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Web Development</div>
          </div>
          <p className="leading-loose text-gray-500 hover:text-white text-md">
            Master technologies like HTML, CSS, JavaScript, and frameworks like
            React and Angular build modern web applications.
          </p>
        </div>

        {/* Card 2: Self-Learning */}
        <div className="w-full p-8 border-2 border-gray-200  rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-800 text-blue-600 hover:text-white sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <IoBookOutline className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Self-Learning</div>
          </div>
          <p className="leading-loose text-gray-500 hover:text-white text-md">
            Embrace the power of self-learning with platforms like freeCodeCamp,
            Coursera, and Udemy to continuously upgrade your skills.
          </p>
        </div>

        {/* Card 3: Cloud Technologies */}
        <div className="w-full p-8 border-2 border-gray-200  rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-800 text-blue-600 hover:text-white sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <CiCloudOn className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Cloud Technologies</div>
          </div>
          <p className="leading-loose text-gray-500  hover:text-white text-md">
            Dive into cloud computing with AWS, Digital Ocean, or Google Cloud
            and gain hands-on experience with scalable solutions and DevOps
            tools.
          </p>
        </div>

        {/* Card 4: Data Science */}
        <div className="w-full p-8 border-2 border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-800 text-blue-600 hover:text-white sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <LiaLaptopCodeSolid className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Game Development</div>
          </div>
          <p className="leading-loose text-gray-500 hover:text-white text-md">
            Dive into game development with C# and Unity, exploring 2D and 3D
            design, physics, animation, and interactive gameplay creation.{" "}
          </p>
        </div>

        {/* Card 5: Mobile Development */}
        <div className="w-full p-8 border-2 border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-800 text-blue-600 hover:text-white sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <LiaMobileAltSolid className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Mobile Development</div>
          </div>
          <p className="leading-loose text-gray-500 hover:text-white text-md">
            Learn how to create mobile applications with frameworks like React
            Native and Flutter, and build apps for both iOS and Android.
          </p>
        </div>

        {/* Card 6: Machine Learning */}
        <div className="w-full p-8 border-2 border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-800 text-blue-600 hover:text-white sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0 bg-white shadow-lg">
          <div className="flex items-center mb-6">
            <TbBrandTorchain className="w-6 h-6 text-indigo-500 hover:text-white" />
            <div className="ml-4 text-xl">Machine Learning</div>
          </div>
          <p className="leading-loose text-gray-500 hover:text-white text-md">
            Dive into the world of machine learning with Python, TensorFlow, and
            Scikit-Learn. Build and deploy predictive models and deep learning
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
