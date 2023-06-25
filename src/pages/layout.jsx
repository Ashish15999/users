import { Link , Outlet } from "react-router-dom";
export function Navbar(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
      
      )
}