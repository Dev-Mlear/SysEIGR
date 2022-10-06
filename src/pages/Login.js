import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import LoginCard from "../components/LoginCard/LoginCard";
const Login = () => (
  <div>
    <HeaderBox background="gradient">
      <Row className="mx-0 flex-column-reverse flex-lg-row">
        <Col></Col>
        {/* <Col lg={5} md={11} sm={12} xs={24}>
          <img src="Assets/svg/third-illustration1.svg" width="90%" />
        </Col> */}
        <Col></Col><Col lg={6} className="px-0 my-auto" md={11} sm={12} xs={24}>
          <LoginCard />
        </Col>
        
        
      </Row>
    </HeaderBox>
    <br />
    <br />
    <br />
  </div>
);

export default Login;

// fait