import {  useNavigate } from "react-router-dom"

import "./welcome.css"

export function Welcome(){
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <nav className="navbar">
                <li className="welcome">Welcome</li>
                <li className="logiout"><button onClick={navigateToHome}>LogOut</button></li>
            </nav>
            <div className="body">
                <div className="blank1">
                    <form method="post"  action="/welcome/notes">
                        <h1>Add My Noted</h1>
                        <input  name ="notes" id="notes" placeholder="Type message here ....."/>
                        <button  type="submit">Save</button>
                    </form>
                </div>
                <div className="right">
                    <h1>All Notes</h1>
                    <hr />
                    <ul>
                        <li>Go to collage</li>
                        <li>Buy new book</li>
                        <li>need some help on it projext </li>
                    </ul>
                </div>
            </div>
        </div>
      
      )
}