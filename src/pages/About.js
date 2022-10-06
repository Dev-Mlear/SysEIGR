import React, { Component } from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import TeamGridSection from "../components/TeamCard/TeamGridSection/TeamGridSection";
import TeamCard from "../components/TeamCard/TeamCard";
import data from "../components/TeamCard/data";
const About = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={6} className="h-100 my-auto">
        <h5>
          <span>HearYouNow</span>,<br />
          Innovative <br />
          Solutions To <br />
          Connect Deaf <br />
          Dumbs With
          <br /> The Universe!
        </h5>
      </Col>
      <Col lg={6}>
        <img src="Assets/svg/second-illustration.svg" width="100%" />
      </Col>
    </HeaderBox>
    <TeamGridSection />
  </div>
);

export default About;
