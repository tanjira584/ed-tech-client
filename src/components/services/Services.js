import React from "react";
import Footer from "../share/Footer";
import Header from "../share/Header";
import AllService from "./AllService";
import PageBanner from "./PageBanner";

const Services = () => {
    return (
        <div>
            <Header></Header>
            <PageBanner></PageBanner>
            <AllService></AllService>
            <Footer></Footer>
        </div>
    );
};

export default Services;
