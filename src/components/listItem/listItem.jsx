import { useEffect, useState } from "react";
import "./listItem.scss";
import {PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

function ListItem({index,item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie,setMovie]=useState({});
    useEffect(() => {
       const getMovie = async () =>{
           try {
               const res = await axios.get("/movies/find/"+ item,{
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjliOGY3NzVmODQ4MGNiYWVjOGI1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU4ODY1OSwiZXhwIjoxNjQwMDIwNjU5fQ.pdc0sCEPunVmAh-WS917xnsHqj_mJoEedU6P7yM_W8Y"
                 }
                });
                if(res.data){
                    setMovie(res.data);
                }
           } catch (err) {
            console.log(err.message)
           }
       }
       getMovie();
    }, [])
    return (
        <Link to={{pathname:"/watch/"+movie._id,movie:movie}}>
        <div className="listItem" 
        // style={{left: isHovered && index * 225 - 50 + index * 0.25}}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
             <img 
                        src={movie?movie.img:""} 
                        alt="" 
                />
                {isHovered && (
                    <>
                     {/* <ReactPlayer
                    className='react-player'
                    url={movie.trailer}
                    playing={true}
                    width='100%'
                    height={145}
                    />
                <video src={movie?movie.trailer:""} autoPlay={true}  loop  /> */}
                <div className="itemInfo">
                    <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>{movie?movie.duration:""}</span>
                        <span className="limit">{movie?movie.limit:""}</span>
                        <span>{movie?movie.year:""}</span>
                    </div>
                    <div className="desc">
                    {movie?movie.title:""}
                    </div>
                    <div className="genre">{movie?movie.genre:""}</div>
                </div>
                </>
                )
            }
        </div>
        </Link>
    )
}

export default ListItem
