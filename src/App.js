
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home"
import {Register} from "./pages/register"
import {Login} from "./pages/login"
import {Welcome} from "./pages/welcome";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="welcome" element={<Welcome/>} />
        

      </Routes>
    </BrowserRouter>
  );
}
export default App;

























