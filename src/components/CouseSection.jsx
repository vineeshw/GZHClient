import React from "react";

const CourseSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-screen-xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-indigo-600">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Explore our range of regular courses designed to help you grow and
          succeed in your career.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Course 1 */}
        <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            Web Development
          </h3>
          <p className="text-base text-gray-600 mt-4">
            Master the fundamentals of web development, including HTML, CSS,
            JavaScript, and React. Build real-world projects and become
            job-ready.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300">
            See More
          </button>
        </div>

        {/* Course 2: Mobile App Development */}
        <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            Mobile App Development
          </h3>
          <p className="text-base text-gray-600 mt-4">
            Learn to build mobile applications for both iOS and Android using
            tools like Flutter, React Native, and Swift. Create intuitive,
            high-performance apps from scratch.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300">
            See More
          </button>
        </div>

        {/* Course 3: Game Development */}
        <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            Game Development
          </h3>
          <p className="text-base text-gray-600 mt-4">
            Learn the fundamentals of game development, including game
            mechanics, physics, and graphics. Master game engines like Unity and
            Unreal Engine to create immersive experiences.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300">
            See More
          </button>
        </div>

        {/* Course 4: Machine Learning */}
        <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            Machine Learning
          </h3>
          <p className="text-base text-gray-600 mt-4">
            Dive into the world of machine learning with hands-on projects.
            Learn to build predictive models and explore algorithms like
            regression, classification, and clustering using Python and
            TensorFlow.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300">
            See More
          </button>
        </div>

        {/* Course 5: English Communication */}
        <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            English Communication
          </h3>
          <p className="text-base text-gray-600 mt-4">
            Enhance your English communication skills through interactive group
            sessions and personalized coaching. Build confidence for interviews,
            improve fluency, and excel in both professional and personal
            interactions.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
