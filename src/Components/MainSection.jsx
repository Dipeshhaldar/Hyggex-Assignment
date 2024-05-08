import React, { useState } from "react";

const MainSection = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Study");

  return (
    <div className="p-4 md:p-8">
      <h1 className="md:text-3xl font-bold text-left bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-transparent bg-clip-text">
        Relation and Functions (Mathematics)
      </h1>
      <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
        <button
          className={`px-0 md:px-4 py-1 md:py-2 rounded-md ${
            activeTab === "Study" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Study")}
        >
          Study
        </button>
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-md ${
            activeTab === "Quiz" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Quiz")}
        >
          Quiz
        </button>
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-md ${
            activeTab === "Test" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Test")}
        >
          Test
        </button>
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-md ${
            activeTab === "Game" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Game")}
        >
          Game
        </button>
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-md ${
            activeTab === "Others" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Others")}
        >
          Others
        </button>
      </div>
      <div className="p-2 md:p-4">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="w-80 md:w-96 h-48 md:h-64 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500">
            <div className="flex justify-between space-x-4 md:space-x-12 py-2 md:py-4 px-2 md:px-4">
              <img src="Bulb.png" alt="Bulb Icon" className="h-6 md:h-8 w-4 md:w-6" />
              <img src="Sound.png" alt="Sound Icon" className="h-6 md:h-8 w-4 md:w-8" />
            </div>
            <h1 className="text-white text-sm md:text-xl flex-grow flex items-center justify-center py-6 md:py-12">
              9 + 6 + 7x -2x -3
            </h1>
          </div>
          <div className="flex flex-row justify-between space-x-14 md:space-x-12 ml-2 md:ml-4 mr-2 md:mr-4">
            <button className="">
              <img src="Refresh.png" alt="Refresh Icon" className="h-4 md:h-6 w-4 md:w-6" />
            </button>
            <div className="flex items-center justify-between">
              <button className="mr-2">
                <img
                  src="Left-Arrow.png"
                  alt="Left Arrow Icon"
                  className="h-4 md:h-6 w-4 md:w-6"
                />
              </button>
              <span className="text-sm md:text-base">01 / 10</span>
              <button className="ml-2">
                <img
                  src="Right-Arrow.png"
                  alt="Right Arrow Icon"
                  className="h-4 md:h-6 w-4 md:w-6"
                />
              </button>
            </div>
            <button className="">
              <img
                src="FullScreen.png"
                alt="Full Screen Icon"
                className="h-4 md:h-6 w-4 md:w-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img src="FullLogo.png" alt="Logo" className="h-14 sm:h-28 w-34 sm:w-58" />
        <img src="FlashCard.png" alt="FlashCard" className="h-10 sm:h-18 w-24 sm:w-44" />
      </div>
    </div>
  );
};

export default MainSection;
