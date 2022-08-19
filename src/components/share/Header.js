import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header-top bg-danger text-light">
                <div className="container d-none d-md-block">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="address-bar d-flex align-items-center">
                            <div className="box d-flex align-items-center me-4">
                                <div className="me-2">
                                    <FontAwesomeIcon
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
                                        icon={faPhoneAlt}
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <span>Contact Support</span>
                                    <p className="m-0">+8801613071257</p>
                                </div>
                            </div>
                            <div className="box d-flex align-items-center me-3">
                                <div className="me-2">
                                    <FontAwesomeIcon
                                        icon={faPhoneAlt}
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <span>Contact Support</span>
                                    <p className="m-0">+8801613071257</p>
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
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
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
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-main container-md">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-md">
                        <h2>
                            <a class="" href=" ">
                                Ed-Tech
                            </a>
                        </h2>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse "
                            id="navbarNavAltMarkup"
                        >
                            <div class="navbar-nav ms-auto">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href=" "
                                >
                                    Home
                                </a>
                                <a class="nav-link" href=" ">
                                    About us
                                </a>
                                <a class="nav-link" href=" ">
                                    Services
                                </a>
                                <a class="nav-link" href=" ">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
