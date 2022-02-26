import "./list.scss";
import {ArrowBackIosOutlined,ArrowForwardIosOutlined} from "@mui/icons-material";
import ListItem from "../listItem/listItem";
import { useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function List({list}) {
const listRef=useRef();
const [isMoved, setisMoved] = useState(false)
const [indexList, setindexList] = useState(0);
    // const handleClick=(dir)=>{
    //     setisMoved(true)
    //     let distance=listRef.current.getBoundingClientRect().x - 50;
    //     if(dir === "left" && indexList>0){
    //         setindexList(indexList-1)
    //         listRef.current.style.transform = `translateX(${230 + distance}px)`;
    //     }
    //     if(dir === "right" && indexList < 5){
    //         setindexList(indexList+1);
    //         listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    //     }
       
     
    // }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
              
                <ScrollMenu ref={listRef} LeftArrow={()=>{
                    return  <ArrowBackIosOutlined style={{display: isMoved?"block":"none"}}  className="sliderArrow left"  />}
                } RightArrow={()=>{
                   return <ArrowForwardIosOutlined className="sliderArrow right"  />}
                }>
                    {list.content.map((item,i)=>(
                    <ListItem index={i} item={item} />
                    ))}
                 </ScrollMenu>
               
            </div>
        </div>
    )
}

export default List
