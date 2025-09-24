import React from 'react';

const Buttons = ({ title }) => {
  console.log("Button title:", title);
  return (
    <button className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap'>
      {title || "Category"}
    </button>
  );
};

export default Buttons;