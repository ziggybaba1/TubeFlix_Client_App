import './navbar.scss';
import {Search,Notifications,ArrowDropDown, Menu, MenuBook} from "@mui/icons-material";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isScrolled, setisScrolled] = useState(false);

window.onscroll = ()=>{
    setisScrolled(window.pageYOffset === 0? true:false);
    return () => (window.onscroll == null);
}
    return (
        <div className={isScrolled?'navbar scrolled':'navbar'}>
           <div className="container">
               <div className="left">
                    <img 
                        src="/img/tubeflix.svg" 
                        alt="" 
                    />
                   <Link to="/" className='link'> <span>Homepage</span></Link>
                   <Link to="series" className='link'><span>Series</span></Link>
                   <Link to="movies" className='link'><span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List </span>
               </div>
               <div className="right">
            <Search className='icon' />
            <span>KID</span>
            <Notifications className="icon" />
            <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        alt="" 
                />
                <div className="profile">
                <ArrowDropDown className='icon' />
                <div className="options">
                <span >Settings</span>
                <span >Logout</span>
                </div>
                </div>
               
               </div>
           </div>
           <div className="containerMob">
               <div className="left">
                    <img 
                       src="/img/tubeflix.svg" 
                        alt="" 
                    />
                    <div className="menuMob">
                    <Menu className='icon' />
                    <div className="options">
                   <Link to="/" className='link'> <span>Homepage</span></Link>
                   <Link to="series" className='link'><span>Series</span></Link>
                   <Link to="movies" className='link'><span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List </span>
                    </div>
               </div>
               </div>
               <div className="right">
            <Search className='icon' />
            <span>KID</span>
            <Notifications className="icon" />
            <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        alt="" 
                />
                <div className="profile">
                <ArrowDropDown className='icon' />
                <div className="options">
                <span >Settings</span>
                <span >Logout</span>
                </div>
                </div>
               
               </div>
           </div>
        </div>
    )
}

export default Navbar
