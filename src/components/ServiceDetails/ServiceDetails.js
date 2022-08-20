import React, { useEffect, useState } from "react";
import Header from "../share/Header";
import Footer from "../share/Footer";
import CourseName from "./CourseName";
import "./ServiceDetail.css";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    useEffect(() => {
        fetch(`https://young-meadow-06567.herokuapp.com/course/${id}`)
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, [id]);
    return (
        <div>
            <Header></Header>
            <CourseName title={course.title}></CourseName>
            <div className="course-details">
                <div className="container-md">
                    <div className="row g-5">
                        <div className="col-md-8">
                            <div className="">
                                <img
                                    className="img-fluid mb-4"
                                    style={{ width: "100%" }}
                                    src={course.img}
                                    alt=""
                                />
                                <div className="mb-4">
                                    <h4>What you will learn</h4>
                                    <ul>
                                        <li>
                                            As a student you will learn how to
                                            use your digital camera
                                        </li>
                                        <li>
                                            You will learn what exposure is and
                                            whats normally called the exposure
                                            triangle
                                        </li>
                                        <li>
                                            You will learn about shutter speed,
                                            aperture and ISO
                                        </li>
                                        <li>
                                            You will learn tips and tricks used
                                            by professional photographers
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-3">Description</h4>
                                    <p className="m-0">{course.desc}</p>
                                    <button className="btn btn-lg btn-danger mt-5 d-none d-md-block">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h2 className="text-muted">
                                        $ {course.price}
                                    </h2>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-lg">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                            <div className="about-course shadow">
                                <ul>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Student Enrolled</span>
                                        <span>{course.students}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Durations</span>
                                        <span>{course.duration} hour</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Effort</span>
                                        <span>{course.effort}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Quizzes</span>
                                        <span>{course.quizzes}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Language</span>
                                        <span>{course.language}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Certificate</span>
                                        <span>{course.certificate}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <span>Video Subtitle</span>
                                        <span>{course.subtitle}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
