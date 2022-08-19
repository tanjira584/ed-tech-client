import React from "react";
import design from "../../images/design.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const ServiceSingle = () => {
    return (
        <div className="service">
            <div className="img">
                <img className="img-fluid" src={design} alt="" />
            </div>
            <div className="body">
                <h4>Creative Web Design</h4>
                <p className="m-0">
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> by
                    Tanjir Ahmed
                </p>
            </div>
        </div>
    );
};

export default ServiceSingle;
