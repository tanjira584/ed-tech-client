import React from "react";
import Footer from "../share/Footer";
import Header from "../share/Header";
import Banner from "./Banner";
import Instruction from "./Instruction";
import ServicesSection from "./ServicesSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <Instruction></Instruction>
            <div style={{ height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
