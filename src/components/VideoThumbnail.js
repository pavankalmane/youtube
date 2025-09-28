import React from 'react'

const VideoThumbnail = ({ thumbnail }) => {
  return (
    <div className='p-2 m-2 w-60'>
        <img alt={thumbnail?.snippet?.title} src={thumbnail?.snippet?.thumbnails?.medium?.url} className=" rounded-lg shadow-lg cursor-pointer m-2" />
        <h3 className='font-semibold text-sm mt-2 line-clamp-2 leading-tight'>{thumbnail?.snippet?.title}</h3>
        <p className='text-xs text-gray-600'>{thumbnail?.snippet?.channelTitle}</p>
        <p className='text-xs text-gray-600'>{thumbnail?.statistics?.viewCount}</p>
    </div>
  )
}   

export default VideoThumbnail