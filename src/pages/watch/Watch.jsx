import { ArrowBackOutlined, Movie } from '@mui/icons-material';
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./watch.scss";
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player/lazy'
import "../../../node_modules/video-react/dist/video-react.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import PageLoader from "../../components/loader/pageloader/PageLoader";
import axios from "axios";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { AuthContext } from '../../context/authContext/AuthContext';

function Watch() {
    const location = useLocation()
    const [movie,setMovie]=useState({});
    const history = useHistory();
    const [loading,setLoading]=useState(false);
    const movied= location.movie;
    let { id } = useParams();
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos=async()=>{
        
        try {
            setMovie(movied);
            setLoading(true)
            let res=await axios.get("api/movies/find/"+id,{
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                 }
                });
            setMovie(res.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
       
    }
   
    return movie && (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined />
                Home
                
            </div>
            </Link>
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

export default Watch
