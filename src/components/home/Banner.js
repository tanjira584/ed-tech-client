import React from "react";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1 className="text-light">
                                A Better Future Starts Here
                            </h1>
                            <p
                                className="text-light mb-4"
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "1.6em",
                                }}
                            >
                                Raque supports students by introducing
                                collaborators outside R, internships and
                                research experience abroad.
                            </p>
                            <button className="btn btn-lg btn-danger">
                                Our Services
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
