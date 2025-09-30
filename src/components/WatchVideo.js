import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utilities/sidebarSlice";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import CurrentVideo from "./CurrentVideo";
import VideoThumbnail from "./VideoThumbnail";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utilities/constant";
import { setVideos } from "../utilities/videoSlice";

const WatchVideo = ({ video }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const videoData = location.state?.videoData;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoId = searchParams.get("v");
  const upcomingVideos = useSelector((store) => store.popularVideos.videos);

  // Fetch videos if not available in Redux
  const fetchVideos = useCallback(async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(setVideos(json.items));
  }, [dispatch]);

  useEffect(() => {
    dispatch(menuClose());
    
    if (!upcomingVideos || upcomingVideos.length === 0) {
      fetchVideos();
    }
  }, [dispatch, upcomingVideos, fetchVideos]);

const handleVideoClick = (video) => {
    navigate(`/watch?v=${video.id}`, { state: { videoData: video } });
};
  return (
    <div className="flex">
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
          <h2 className="font-bold text-2xl my-3">
            {videoData?.snippet?.title}
          </h2>
        </div>
        <div>
          <CurrentVideo videoInfo={videoData} />
        </div>
      </div>
      <div className="h-screen overflow-y-auto overflow-x-hidden border-l pl-4 w-full bg-gray-100 ">
        {upcomingVideos
          .filter(video => video && video.id) // Filter out undefined videos
          .map((upcomingVideo) => (
            <div key={upcomingVideo.id} onClick={() => handleVideoClick(upcomingVideo)}>
              <VideoThumbnail thumbnail={upcomingVideo} />
            </div>
          ))}
      </div>    
    </div>
  );
};

export default WatchVideo;
