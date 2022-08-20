import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./components/services/Services";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/services" element={<Services></Services>}></Route>
            </Routes>
        </div>
    );
}

export default App;
