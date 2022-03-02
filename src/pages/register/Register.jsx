import { useContext, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./register.scss";

function Register() {
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [index, setIndex] = useState(0);
    const emailRef=useRef();
    const {user,dispatch,isFetching} = useContext(AuthContext);
    
    // const handleChange=(e)=>{
    //     const value= e.target.value;
    //     setInput({...input, [e.target.name]:value});
       
    // }
    const handleStart=()=>{
        setIndex(index+1);
    }
    const handleFinish=()=>{
       try {
        var data = {
            "username": username,
            "email": email,
            "password": password
          };
        register(data,dispatch); 
        // console.log(index);
       } catch (error) {
           
       }
    }
    return (
        <div className="register">
            
            <div className="top">
           
                <div className="wrapper">
                <img src="/img/tubeflix.svg" alt="" className="logo" />
            
            </div>
        </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>
                  Ready to watch? Enter your email to create or restart a membership
                </p>
                
                {index==0&&
                     <div className="input">
                     <input name="email" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email address" />
                     <button type="submit" className="registerButton" onClick={handleStart}>Get Started</button>
                   
                 </div>
                }
                {index==1&&
                    <div className="input">
                    <input name="username " onChange={(e)=>setUsername(e.target.value)} defaultValue={null} type="text" placeholder="Enter username" />
                    <button type="submit" className="registerButton" onClick={handleStart}>Proceed</button>
                </div>
                }
                {index==2&&
                    <div className="input">
                    <input name="password " onChange={(e)=>setPassword(e.target.value)} defaultValue={null} type="password" placeholder="Enter password" />
                    <button type="submit" disabled={isFetching} className="registerButton" onClick={handleFinish}>{isFetching&&<>a moment...</>}{!isFetching&&<>Start</>}</button>
                </div>
              }
              <Link to="/login" className="loginButton">Already have an account?</Link>
            </div>
            
        </div>
    )
}

export default Register
