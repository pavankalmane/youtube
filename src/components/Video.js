import React from "react";
import {useEffect} from "react";
import { YOUTUBE_VIDEOS_API } from "../utilities/constant";
import { useDispatch } from "react-redux";
import { setVideos } from "../utilities/videoSlice";
import { useSelector } from "react-redux";
import VideoThumbnail from "./VideoThumbnail";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Video=()=>{
    const dispatch = useDispatch();
    const videoData=async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        dispatch(setVideos(json.items));
    }

const popularVideos = useSelector((store)=>store.popularVideos.videos);

    useEffect(()=>{
        videoData();
    },[]);
    return(
        <div className="flex flex-wrap overflow-hidden">
            {popularVideos.length<0?<Shimmer/>:
            popularVideos.map((video)=><Link to={`/watch?v=${video.id}`} state={{ videoData: video }}><VideoThumbnail key={video.id} thumbnail={video}/></Link>)}
        </div>
    )
};
export default Video;