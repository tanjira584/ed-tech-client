import React from "react";
import loginbg from "./../../images/loginbg.jpg";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
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
                        <form action="">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Email"
                            />
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Password"
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
                            <button className="w-100 p-2">
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
