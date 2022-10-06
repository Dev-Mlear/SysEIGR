import React from "react";
import { Col, Row } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";

import { Button } from "../components/Button/Button";

const Product = () => (
  <div>
    <HeaderBox>
      <Row>
      <Col></Col>
        <Col lg={3} className="my-auto">
          <img src="Assets/svg/system.svg" width="75%" />
        </Col>
        
        <Col lg={4} className="my-auto">
          <h4>HearYouNow Kit™</h4>
          <br />
          <img src="Assets/svg/rating.svg" width="45%" />
          <br/>
          <br/>
          <p>
            An embedded system kit that will allow to communicate with deaf
            dumbs easily and smoothly by detecting gestures and signs, then
            converting them to text or voice and vice versa.
          </p>
          <br/>
          <Button
            color={"transparent"}
            shadow={"none"}
            outline={"#DA4459"}
            text={"#DA4459"}
            fixedWidth={true}
          >
            {"Grab Yours!"}
          </Button>
          <br/>
          <br/>
        </Col>
        <Col></Col>
      </Row>
      <br/>
      <Row >
        <Col>
      <img src="Assets/svg/f1.svg"/>
        </Col>
        <Col>
      <img src="Assets/svg/f2.svg"/>
        </Col>
        <Col>
      <img src="Assets/svg/f3.svg"/>
        </Col>
        <Col>
      <img src="Assets/svg/f4.svg"/>
        </Col>
      </Row> 
      {/* <div className="wrapper">
        <img src="Assets/svg/f1.svg"/>
        <img src="Assets/svg/f2.svg"/>
        <img src="Assets/svg/f3.svg"/>
        <img src="Assets/svg/f4.svg"/>
      </div>*/}
      <br/>
      <img src="Assets/svg/features_breakdown1.svg"/>
      <br/>
      <br/>
      <img src="Assets/svg/stats.svg"/>
    </HeaderBox>
  </div>
);

export default Product;
