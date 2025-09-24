import React from "react";

const Buttons = ({ title }) => {
  console.log("Button title:", title);
  return (
      <button className="flex-shrink-0 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 m-1">
        {title}
      </button>
      
  );
};

export default Buttons;
