import { useContext } from "react";
import { useRef,useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss";

function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const emailRef=useRef();
    const {user,dispatch,isFetching} = useContext(AuthContext);
    
    const handleStart=()=>{
        setEmail(emailRef.current.value);
    }
    const handleFinish=(e)=>{
        e.preventDefault();
        try {
            var data = {
                "email": email,
                "password": password
              };
            login(data,dispatch); 
            // console.log(index);
           } catch (error) {
               
           }
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img src="/img/tubeflix.svg" alt="" className="logo" />
            </div>
        </div>
            <div className="container">
               <form >
                   <h3>Login</h3>
                   <input  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email or phone number" />
                   <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                   <button onClick={handleFinish} type="submit" disabled={isFetching} className="loginButton">{isFetching&&<>a moment...</>}{!isFetching&&<>Sign In</>}</button>
                   <Link to="/register">
                       New to Tubeflix <b>Sign up now.</b>
                   </Link>
                   <small>
                       This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                   </small>
               </form>
            </div>
        </div>
    )
}

export default Login
