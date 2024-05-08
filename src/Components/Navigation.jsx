import React from "react";

const Navigation = () => {
  return (
    <div className="flex items-center justify-start mt-4 py-8 text-xs md:text-base">
      <div className="flex items-center">
        <img src="Home.png" alt="Hut Icon" className="h-4 w-4 md:h-6 md:w-6 mr-2" />
        <img src="Arrow.png" alt="Arrow Head Icon" className="h-4 w-4 md:h-6 md:w-6 mr-2" />
        <span className="text-gray-900 font-semibold">Flashcard</span>
      </div>
      <img
        src="Arrow.png"
        alt="Arrow Head Icon"
        className="h-4 w-4 md:h-6 md:w-6 mx-2 text-gray-500"
      />
      <span className="text-gray-900 font-semibold">Mathematics</span>
      <img
        src="Arrow.png"
        alt="Arrow Head Icon"
        className="h-4 w-4 md:h-6 md:w-6 mx-2 text-gray-500"
      />
      <span className="text-blue-900 font-bold">Relation and Functions</span>
    </div>
  );
};

export default Navigation;
