import { CHANNEL_API } from "../utilities/constant";
import { useEffect, useState } from "react";
import VideoReaction from "./VideoReaction";
const CurrentVideo = ({ videoInfo }) => {
    const formatSubscriberCount = (count) => {
  if (!count) return '0';
  
  const num = parseInt(count);
  
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

    const channelAPI = `${CHANNEL_API}&id=${videoInfo?.snippet?.channelId}`
    const [channelData, setChannelData] = useState(null);
    const channelInfo=async()=>{
        const data =await fetch(channelAPI);
        const json= await data.json();
        setChannelData(json.items?.[0]);
    }
    useEffect(()=>{
    channelInfo();
  },[])

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg w-2/4 flex">
      <div className="flex items-center ">
        <img src={channelData?.snippet?.thumbnails?.default?.url} alt="channelLogo" className="bg-black-800 h-10 w-10 rounded-full"/>
        <span className="text-2xl font-bold p-2">{videoInfo?.snippet?.channelTitle}</span>
      </div>
        <div className="flex items-center ml-2">
            <span className="text-sm">{formatSubscriberCount(channelData?.statistics?.subscriberCount)} Subscribers</span>
        </div>
        <div className="flex"><VideoReaction  reaction={videoInfo?.statistics} /></div>
    </div>
    </div>

  )
}

export default CurrentVideo