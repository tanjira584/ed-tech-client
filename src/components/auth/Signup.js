import React from "react";
import signupbg from "./../../images/signup-bg.jpg";
import "./Auth.css";

const Signup = () => {
    return (
        <div className="login-page">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-bg">
                        <img className="" src={signupbg} alt="" />
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <div className="signup-form">
                        <div className="text-center mb-4">
                            <h2 className="mb-4 fw-bold">Ed-Tech</h2>
                            <h3>Open up your Edali Account</h3>
                            <span>Welcome to Ed-Tech</span>
                        </div>
                        <form action="">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Name"
                            />
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
                                className="form-control btn-danger btn "
                                value="SIGNUP"
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
                            Have an account?
                            <button className="btn border-0 text-primary">
                                Login now
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
