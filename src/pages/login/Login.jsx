import { useRef } from "react";
import { useState } from "react";
import "./login.scss";

function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const emailRef=useRef();
    
    const handleStart=()=>{
        setEmail(emailRef.current.value);
    }
    const handleFinish=()=>{
       
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img src="/img/tubeflix.svg" alt="" className="logo" />
            </div>
        </div>
            <div className="container">
               <form>
                   <h1>Login</h1>
                   <input type="email" placeholder="Email or phone number" />
                   <input type="password" placeholder="Password" />
                   <button className="loginButton">Sign In</button>
                   <span>
                       New to Netflix <b>Sign up now.</b>
                   </span>
                   <small>
                       This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                   </small>
               </form>
            </div>
        </div>
    )
}

export default Login
