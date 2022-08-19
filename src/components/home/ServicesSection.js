import React from "react";
import ServiceSingle from "./ServiceSingle";
import "./ServiceSection.css";

const ServicesSection = () => {
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
                        <button className="btn btn-danger">View More</button>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                    <div className="col-md-4">
                        <ServiceSingle></ServiceSingle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
