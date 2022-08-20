import React from "react";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
    const [user] = useAuthState(auth);
    const loggedOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="header-top bg-danger text-light d-none d-md-block">
                <div className="container d-none d-md-block">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="address-bar d-flex align-items-center">
                            <div className="box d-flex align-items-center me-4">
                                <div className="me-2">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faPhoneAlt}
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <span>Contact Support</span>
                                    <p className="m-0">+8801613071257</p>
                                </div>
                            </div>
                            <div className="box d-flex align-items-center me-4">
                                <div className="me-2">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faLocationDot}
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <span>Our Location</span>
                                    <p className="m-0">+New York, USA</p>
                                </div>
                            </div>
                            <div className="box d-flex align-items-center me-3">
                                <div className="me-2">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faEnvelope}
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <span>Contact email</span>
                                    <p className="m-0">tanjira584@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-icon">
                            <ul className="m-0 p-0">
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-main container-md px-0">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-md">
                        <h2>
                            <Link className="" to="/">
                                Ed-Tech
                            </Link>
                        </h2>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse "
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav ms-auto">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link className="nav-link" to="/">
                                    About us
                                </Link>
                                <Link className="nav-link" to="/services">
                                    Services
                                </Link>
                                {user ? (
                                    <button
                                        className="border-0 text-start bg-transparent p-0"
                                        onClick={loggedOut}
                                    >
                                        Signout
                                    </button>
                                ) : (
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
