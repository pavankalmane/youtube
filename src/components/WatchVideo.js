import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utilities/sidebarSlice";
import { useSearchParams, useLocation } from "react-router-dom";
import CurrentVideo from "./CurrentVideo";
const WatchVideo = ({ video }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const videoData = location.state?.videoData;
  console.log(videoData);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className="m-10">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"    
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>{" "}
      <div className="w-2/4">
        <h2 className="font-bold text-2xl my-3">{videoData?.snippet?.title}</h2>
      </div>
      <div>
        <CurrentVideo videoInfo={videoData} />
      </div>
    </div>
  );
};

export default WatchVideo;
