import React, { useState } from "react";
import loginbg from "./../../images/loginbg.jpg";
import "./Auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "./../../../src/firebase.init";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, euser, eloading, eerror] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    if (guser || euser) {
        navigate(from, { replace: true });
        toast(" Loggedin successfully");
    }

    if (eloading || gloading) {
        return <p className="text-center mt-5">Loading....</p>;
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        signInWithEmailAndPassword(user.email, user.password);
        toast(" Loggedin successfully");
        setUser({ name: "", email: "", password: "" });
        e.target.reset();
    };
    return (
        <div className="login-page">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-bg">
                        <img className="img-fluid" src={loginbg} alt="" />
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <div className="login-form">
                        <div className="text-center mb-4">
                            <h2 className="mb-4 fw-bold">
                                <Link to="/">Ed-Tech</Link>
                            </h2>
                            <h3>Welcome Back</h3>
                            <span>Login with your site account</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Email"
                                name="email"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Password"
                                name="password"
                                onChange={handleChange}
                            />
                            <input
                                type="submit"
                                className="form-control btn-danger btn"
                                value="Login"
                            />
                        </form>
                        <div className="d-flex align-items-center py-3">
                            <div className="border w-50"></div>
                            <div className="mx-4">OR</div>
                            <div className="border w-50"></div>
                        </div>
                        <div>
                            <button
                                className="w-100 p-2"
                                onClick={() => signInWithGoogle()}
                            >
                                Continue With Google
                            </button>
                        </div>
                        <p className="m-0 text-center">
                            Not a member yet?{" "}
                            <Link to="/signup">
                                <button className="btn text-danger border-0">
                                    Register now
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
