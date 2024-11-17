import React from "react";
import TeamData from "../data/Bigteam.json";

const BigTeams = () => {
  return (
    <div class="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
        The big team
      </p>
      <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Meat the best team in wolrd
      </p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
       
      {TeamData?.map((member) => (
        <div key={member.id} className="p-4">
          <div className="flex-col flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <img
                  alt={`${member.name}'s profile`}
                  src={`/assets/reviewers/${member.image}`}
                  className="mx-auto object-cover rounded-full h-20 w-20"
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                {member.name}
              </span>
              <span className="text-xs text-gray-400">{member.role}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BigTeams;
