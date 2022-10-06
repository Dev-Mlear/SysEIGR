import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import RegisterCard from "../components/RegisterCard/RegisterCard";
const Signup = () => (
  <div>
    <HeaderBox background="gradient">
      <Row className="mx-0 flex-column-reverse flex-lg-row">
        <Col lg={5} className="px-0 my-auto">
          <RegisterCard />
        </Col>
        <Col></Col>
        <Col lg={5} className="my-auto">
          {/* <img src="Assets/svg/chatexample.svg" width="80%" /> */}
        </Col>
      </Row>
    </HeaderBox>
    <br />
  </div>
);

export default Signup;

// fait
