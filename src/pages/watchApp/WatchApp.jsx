import { ArrowBackOutlined, Movie } from '@mui/icons-material';
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./watchapp.scss";
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player/lazy'
import "../../../node_modules/video-react/dist/video-react.css";
import { useEffect } from "react";
import { useState } from "react";
import PageLoader from "../../components/loader/pageloader/PageLoader";
import axios from "axios";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function WatchApp() {
    const location = useLocation()
    const [movie,setMovie]=useState({});
    const history = useHistory();
    const movied= location.movie;
    let { id,token } = useParams();

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos=async()=>{
        setMovie(movied);
        let res=await axios.get("api/movies/find/"+id,{
          headers: {
              Authorization: `Bearer ${token}`
           }
          });
        setMovie(res.data);
    }
   
    return movie && (
        <div className="watch">
            <div className='player-wrapper'>
        {!isMobile&&
        <ReactPlayer
          className='react-player'
          url={movie.video}
          width={'100%'}
          height={'100%'}
        />}
         {isMobile&&
        <ReactPlayer
          className='react-player'
          url={movie.video}
          width={'100%'}
        />}
      </div>
        </div>
    ) || (
        <PageLoader title="Page loading" />
    )
    
}

export default WatchApp
