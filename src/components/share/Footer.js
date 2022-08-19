import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer-top text-light">
                <div className="container-md">
                    <div className="row g-5">
                        <div className="col-md-3">
                            <div className="box">
                                <h4>Contact Us</h4>
                                <div className="d-flex mb-3">
                                    <div className="me-2">
                                        <FontAwesomeIcon
                                            icon={faAddressBook}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        2750 Quadra Street Victoria Road, New
                                        York, Canada
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="me-2">
                                        <FontAwesomeIcon
                                            icon={faAddressBook}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        2750 Quadra Street Victoria Road, New
                                        York, Canada
                                    </div>
                                </div>
                                <div className="d-flex ">
                                    <div className="me-2">
                                        <FontAwesomeIcon
                                            icon={faAddressBook}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        2750 Quadra Street Victoria Road, New
                                        York, Canada
                                    </div>
                                </div>
                                <div className="footer-icon">
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
                        <div className="col-md-3">
                            <div className="box">
                                <h4>Supports</h4>
                                <div className="support">
                                    <ul>
                                        <li>
                                            <a href=" ">About us</a>
                                        </li>
                                        <li>
                                            <a href=" ">FAQ's</a>
                                        </li>
                                        <li>
                                            <a href=" ">Events</a>
                                        </li>
                                        <li>
                                            <a href=" ">Gallary</a>
                                        </li>
                                        <li>
                                            <a href=" ">Blogs</a>
                                        </li>
                                        <li>
                                            <a href=" ">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <h4>Useful Links</h4>
                                <div className="useful">
                                    <ul>
                                        <li>
                                            <a href=" ">Graphic Design</a>
                                        </li>
                                        <li>
                                            <a href=" ">Photography</a>
                                        </li>
                                        <li>
                                            <a href=" ">Web Design</a>
                                        </li>
                                        <li>
                                            <a href=" ">Web Development</a>
                                        </li>
                                        <li>
                                            <a href=" ">Digital Marketing</a>
                                        </li>
                                        <li>
                                            <a href=" ">Uk Education</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <h4>Newsletter</h4>
                                <p>
                                    To get the latest news and latest updates
                                    from us.
                                </p>
                                <p className="m-1">Your e-mail address:</p>
                                <div>
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control p-2 mb-3"
                                        id=""
                                        placeholder="Enter Your Email"
                                    />
                                    <input
                                        type="submit"
                                        className="form-control p-2 btn btn-danger"
                                        value="SUBSCRIBE"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom text-center py-3 text-light">
                <h2>Ed-Tech</h2>
                <p className="m-0">
                    Copyright 2022 Edali Designed By EnvyTheme | All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
