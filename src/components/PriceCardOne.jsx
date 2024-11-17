import React from "react";

const PriceCards = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-screen-xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
          Our Services and Pricing
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          From building fast and reliable static websites to creating dynamic,
          feature-rich web applications, our expert team offers tailored
          solutions to meet your business needs and help you succeed online.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 my-12 ms-8 dark:text-white">
        {/* MERN Plan Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between text-indigo-600">
                <p className="text-3xl font-semibold">Static Website</p>
                <p className="flex flex-col text-xl font-bold">
                  £5000
                  <span className="text-sm text-gray-500">Only Creating</span>
                </p>
              </div>
              <p className="mt-4 text-gray-600">Plan includes:</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Unlimited components
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Custom Tailwind styles
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Unlimited Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Free premium dashboard
                </li>
              </ul>
              <button
                type="button"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        {/* PYTHON Plan Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between text-indigo-600">
                <p className="text-3xl font-semibold">PYTHON</p>
                <p className="flex flex-col text-xl font-bold">
                  £3000
                  <span className="text-sm text-gray-500">per month</span>
                </p>
              </div>
              <p className="mt-4 text-gray-600">Plan includes:</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Unlimited components
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Custom Tailwind styles
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Unlimited Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Free premium dashboard
                </li>
              </ul>
              <button
                type="button"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
