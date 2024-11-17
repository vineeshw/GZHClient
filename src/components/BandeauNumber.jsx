import React from "react";

const BandeauNumber = () => {
  return (
    <section class="bg-indigo-800">
      <div class="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline text-white">2179</span>
            <span class="text-indigo-200">+</span>
          </h5>
          <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Cups of coffee
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline text-white">13</span>
            <span class="text-indigo-200">+</span>
          </h5>
          <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Ongoing contracts
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline text-white">31</span>
            <span class="text-indigo-200">+</span>
          </h5>
          <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Finished projects
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline text-white">3</span>
            <span class="text-indigo-200">+</span>
          </h5>
          <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Years in business
          </p>
        </div>
      </div>
      <div class="flex p-4 mx-auto mt-4 w-52">
        <button
          type="button"
          class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Join
        </button>
      </div>
    </section>
  );
};

export default BandeauNumber;
