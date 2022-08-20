import React, { useState } from "react";
import signupbg from "./../../images/signup-bg.jpg";
import "./Auth.css";
import { Link } from "react-router-dom";
import auth from "./../../../src/firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, , loading] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile] = useUpdateProfile(auth);
    if (loading || gloading) {
        return <p className="text-center mt-5">Loadding....</p>;
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(user.email, user.password);
        updateProfile({ displayName: user.name });
        setUser({ name: "", email: "", password: "" });
        e.target.reset();
    };
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
                            <h2 className="mb-4 fw-bold">
                                <Link to="/">Ed-Tech</Link>
                            </h2>
                            <h3>Open up your Edali Account</h3>
                            <span>Welcome to Ed-Tech</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Name"
                                name="name"
                                onChange={handleChange}
                            />
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
                            <button
                                className="w-100 p-2"
                                onClick={() => signInWithGoogle()}
                            >
                                Continue With Google
                            </button>
                        </div>
                        <p className="m-0 text-center">
                            Have an account?
                            <Link to="/login">
                                <button className="btn border-0 text-primary">
                                    Login now
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
