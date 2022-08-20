import React from "react";
import Footer from "../share/Footer";
import Header from "../share/Header";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Instruction from "./Instruction";
import ServicesSection from "./ServicesSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <Instruction></Instruction>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;
