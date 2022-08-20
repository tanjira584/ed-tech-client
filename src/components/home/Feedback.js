import React from "react";
import "./Feedback.css";
import user from "./../../images/user1.jpg";

const Feedback = () => {
    return (
        <div className="feedback-area">
            <div className="container-md">
                <div className="feedback-content">
                    <p
                        className="mb-5"
                        style={{
                            fontSize: "22px",
                            fontWeight: "500",
                            lineHeight: "1.6em",
                        }}
                    >
                        “The difference between school and life? In school,
                        you're taught a lesson and then given a test. In life,
                        you're given a test that teaches you a lesson.”
                    </p>
                    <div className="d-flex justify-content-md-end justify-content-center align-items-center">
                        <div className="me-3">
                            <p className="m-0" style={{ fontSize: "22px" }}>
                                James Anderson
                            </p>
                            <span className="text-danger">Web Designer</span>
                        </div>
                        <div className="user-img shadow">
                            <img
                                className="img-fluid rounded rounded-circle "
                                src={user}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
