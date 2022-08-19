import React from "react";
import ServiceSingle from "./ServiceSingle";
import "./ServiceSection.css";

const ServicesSection = () => {
    return (
        <div className="service-area">
            <div className="container-md">
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
