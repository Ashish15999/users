import { useNavigate } from "react-router-dom"

import "./home.css"
export function Home(){
    const navigate = useNavigate()
    const navigateToRegister = ()=>{
        navigate("/register");
    }
    const navigateToLogin = ()=>{
        navigate("/login");
    }
    return (
      <div>
        <div className="header"></div>
        <div className="body">
            <div className="blank"></div>
            <div className="right">
                <div className="rightblank"></div>
                <div className="rightblank"></div>
                <div><h1 className="welcome">Welcome</h1></div>
                <button className="register" onClick={navigateToRegister}>Register</button>
                <button className="login"  onClick={navigateToLogin}>Login</button>
            </div>
        </div>
      </div>
      
      )
}


