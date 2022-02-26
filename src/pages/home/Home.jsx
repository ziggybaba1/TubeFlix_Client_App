import "./home.scss"
import React, { useContext, useEffect, useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
// import {AcUnit} from "@material-ui/icons"

const Home = ({type}) => {
    const [list, setList] = useState([]);
    const [genre, setGenre] = useState(null);
    const {user} = useContext(AuthContext);

    useEffect(() => {
      const getRandomLists = async ()=>{
          try {
             const res=await axios.get(`list${type ? "?type=" + type:""}${genre ? "&genre=" + genre:""}`,{
                 headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                 }
             });
             setList(res.data);
          } catch (err) {
            getRandomLists();
          }
      }

      getRandomLists();
    }, [])
    return (
        <div className='home'>
           <Navbar />
           {/* */}
          <Featured  type={type} />
          <div className="homeList">
          {list.map((list)=>(
               <List  list={list} />
          ))}
        </div>
        </div>
    )
}

export default Home
