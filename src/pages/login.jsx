import { useNavigate } from "react-router-dom"

import "./home.css"
import "./form.css"

export function Login(){
    return (
      <div>
        <div className="header"></div>
        <div className="body">
            <div className="blank"></div>
            <div className="right">
                <form method="post"  action="/login/users">
                    <div>
                        <input id="username" name="username" type="text"  placeholder="UserName" />
                    </div>
                    <div>
                        <input id="password" name="password" type="password"  placeholder="Password" />
                    </div> 
                    
                    <button className="register" type="submit">Login</button>
                </form>
            </div>
        </div>
      </div>
      
      )
}