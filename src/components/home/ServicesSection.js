import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./ServiceSection.css";
import { Link } from "react-router-dom";
const ServicesSection = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://young-meadow-06567.herokuapp.com/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div className="service-area">
            <div className="container-md">
                <div className="section-info mb-5 d-flex align-items-center justify-content-between">
                    <div>
                        {" "}
                        <h6 className="text-danger">services</h6>
                        <h2>Our Courses</h2>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-lg">
                            View More
                        </button>
                    </div>
                </div>
                <div className="row g-5">
                    {courses.map((course) => (
                        <div className="col-md-4" key={course._id}>
                            <div className="service shadow">
                                <div className="img">
                                    <img
                                        className="img-fluid"
                                        src={course.img}
                                        alt=""
                                    />
                                </div>
                                <div className="body p-3">
                                    <h4>{course.title}</h4>
                                    <p className="m-0">
                                        <FontAwesomeIcon
                                            icon={faPhoneAlt}
                                        ></FontAwesomeIcon>{" "}
                                        by {course.mentor}
                                    </p>
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="text-danger fw-bold">
                                                $ {course.price}
                                            </span>
                                        </div>
                                        <div>
                                            <Link
                                                className="btn btn-danger btn-small"
                                                to={`/course/${course._id}`}
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
