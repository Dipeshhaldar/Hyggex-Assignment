import React from "react";

const FAQ = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-left bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-transparent bg-clip-text pt-24">
        FAQ
      </h1>
      <div className="flex flex-col justify-start pt-14 space-y-4">
        <div className="flex items-center justify-between border border-gradient text-left px-4 py-2">
          <p className="text-sm md:text-base">
            Can education flashcards be used for all age groups?
          </p>
          <img src="DownArrow.png" alt="" className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="flex items-center justify-between border border-gradient text-left px-4 py-2">
          <p className="text-sm md:text-base">How do education flashcards work?</p>
          <img src="DownArrow.png" alt="" className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="flex items-center justify-between border border-gradient text-left px-4 py-2">
          <p className="text-sm md:text-base">
            Can education flashcards be used for test preparation?
          </p>
          <img src="DownArrow.png" alt="" className="h-4 w-4 md:h-6 md:w-6" />
        </div>
      </div>
    </>
  );
};

export default FAQ;
