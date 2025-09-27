import { CHANNEL_API } from "../utilities/constant";

const CurrentVideo = ({ videoInfo }) => {
    const channelAPI = `${CHANNEL_API}&id=${videoInfo?.snippet?.channelId}`
    const channelInfo=async()=>{
        const data =await fetch(channelAPI);
        const json= await data.json();
        console.log("Hellloooooo",json);
    }
    channelInfo();

  return (
    <div>CurrentVideo</div>
  )
}

export default CurrentVideo