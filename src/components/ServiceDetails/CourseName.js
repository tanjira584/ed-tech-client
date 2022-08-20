import React from "react";
import "./CourseName.css";
import { Link } from "react-router-dom";
import bg from "./../../images/page-banner.jpg";

const CourseName = ({ title }) => {
    return (
        <div className="page-banner" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container-md">
                <div className="breadcum">
                    <p className="mb-3 text-light fw-bold">
                        <Link className="text-light" to="/">
                            Home
                        </Link>{" "}
                        <span> {">"}</span>{" "}
                        <Link className="text-light" to="/services">
                            Courses
                        </Link>{" "}
                        {" > "} {title}
                    </p>
                    <h2 className="fw-bold text-light">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default CourseName;
