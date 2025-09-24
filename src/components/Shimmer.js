import React from 'react'

const Shimmer = () => {
  return (
    <div className='p-2 m-2 w-60'>
        <img alt="Loading..." src="https://via.placeholder.com/150" className=" rounded-lg shadow-lg cursor-pointer m-2" />
        <h3 className='font-semibold text-sm mt-2 line-clamp-2 leading-tight'>Loading...</h3>
        <p className='text-xs text-gray-600'>Loading...</p>
        <p className='text-xs text-gray-600'>Loading...</p>
    </div>
  )
}

export default Shimmer