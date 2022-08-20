import React from "react";
import design from "../../images/design.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const ServiceSingle = (props) => {
    const course = props.course;

    return (
        <div className="service shadow">
            <div className="img">
                <img className="img-fluid" src={design} alt="" />
            </div>
            <div className="body p-3">
                <h4>Creative Web Design</h4>
                <p className="m-0">
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> by
                    Tanjir Ahmed
                </p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <span className="text-danger fw-bold">$150</span>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-small">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSingle;
