import React from "react";
import "./Instruction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt,
    faRightToBracket,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import arrow from "../../images/arrow.png";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
const Instruction = () => {
    return (
        <div className="instruction-area">
            <div className="container-md">
                <div className="ins-content text-center mb-5 text-light">
                    <h6>Find Courses</h6>
                    <h2>How It Works?</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="arrow-box text-center p-4 text-light">
                            <img src={arrow} alt="" />
                            <div className="mb-3">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faSearch}
                                ></FontAwesomeIcon>
                            </div>
                            <h4>Search Courses</h4>
                            <p className="m-0">
                                An nec placerat repudiare scripserit, temporibus
                                complectitur at sea, vel ignota fierent
                                rreloquentiam id.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="arrow-box text-center p-4 text-light">
                            <img src={arrow} alt="" />
                            <div className="mb-3">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileLines}
                                ></FontAwesomeIcon>
                            </div>
                            <h4>View Course Details</h4>
                            <p className="m-0">
                                An nec placerat repudiare scripserit, temporibus
                                complectitur at sea, vel ignota fierent
                                rreloquentiam id.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="arrow-box text-center p-4 text-light">
                            <div className="mb-3">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faRightToBracket}
                                ></FontAwesomeIcon>
                            </div>
                            <h4>Apply, Enroll or Register</h4>
                            <p className="m-0">
                                An nec placerat repudiare scripserit, temporibus
                                complectitur at sea, vel ignota fierent
                                rreloquentiam id.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;
