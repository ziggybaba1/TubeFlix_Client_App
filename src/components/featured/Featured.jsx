import "./Featured.scss";
import {PlayArrow,InfoOutlined} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

function Featured({type}) {
    const [content, setContent] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(()=>{
const getRandomContent= async ()=>{
 try {
     const res = await axios.get(`api/movies/random?type=${type}`,{
        headers: {
            Authorization: `Bearer ${user?.accessToken}`
         }
        });
     setContent(res.data[0]);
 } catch (err) {
     console.log(err);
 }
}
getRandomContent();
    }, [type]);
    
    return (
        <div className="featured">
            {type &&(
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option value="Genre">Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}
           
                 <div className="dimPics">
                 <img 
                        src={content.img}
                        alt="" 
                />
                <div className="info">
                    <img src={content.imgTitle} alt=""  />
                <span className="desc">
               {content.desc}
                </span>
                <div className="buttons">
                    <Link to={{pathname:"/watch/"+content._id,movie:content}}>
                    <button className="play">
                        <PlayArrow  />
                        <span>Play</span>
                    </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined  />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Featured
