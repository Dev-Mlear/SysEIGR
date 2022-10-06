import React, { Component } from "react";

import { Col, Row } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import { Button } from "../components/Button/Button";
import LeftContentBlock from "../components/ContentBlock/LeftContentBlock/LeftContentBlock";
import RightContentBlock from "../components/ContentBlock/RightContentBlock/RightContentBlock";
import Pricing from "../components/Pricing/Pricing";
import Carousel from "../components/Carousel/Carousel";
import CardGrid from "../components/CardGrid/CardGrid";

import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <HeaderBox background="gradient">
        <Fade direction="right" triggerOnce={true}>
          <Row>
            <Col lg={4} className="h-100 my-auto">
              <h5>
                <span>
                  SysIGR, <br />
                  Système interrogatoire de la Gendarmerie Royale!
                </span>
              </h5>
              <br />
              <p>
                Not everyone can hear or talk. Deaf and dumb people find
                difficulties to communicate with the society. Our Product solves
                this issue and bridges the gap between them and the rest of the
                society.
              </p>
              <Button text={"#ffff"} shadow={"none"}>
                {"Get The Kit"}
              </Button>
              &nbsp; &nbsp;
              <Button
                color={"transparent"}
                shadow={"none"}
                outline={"#f8a026"}
                text={"#f8a026"}
                fixedWidth={true}
              >
                {"Learn More"}
              </Button>
            </Col>
            <Col></Col>
            <Col lg={6} className="my-auto">
              <img src="Assets/svg/main-illustration2.svg" width="100%" />
            </Col>
          </Row>
        </Fade>
      </HeaderBox>
      <CardGrid />
      <LeftContentBlock
        title={"Communicate Easily with Deaf Dumb People"}
        content={
          "HearYouNow provides a seamless communication between deaf and dumb people and the rest of community by detecting signs language, text and also voice. For the purpose of integrating them into the society"
        }
        button={"Learn More"}
        icon="second-illustration.svg"
      />
      <RightContentBlock
        title={"Try Our Free Customer Service"}
        content={
          "Besides our standard and entreprise plan, we have a free web portal thet allow you communicate with deaf dumb people and access information instantaneously."
        }
        button={"Try Now"}
        icon="third-illustration.svg"
      />
      <Pricing />
      <Carousel />
    </div>
  );
};

export default Home;

// fait