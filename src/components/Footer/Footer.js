import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./styles.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <Container fluid>
            <Row className="row justify-content-around">
              <Col lg={3} className="column">
                <a href="/">
                  <img src="Assets/svg/logo6.svg" width="30%" />
                </a>
                <p className="description">
                  SysIGR fournit une solution speech-to-text au profit de la Gendarmerie Royale
                </p>
                <br />
                <br />
                <p className="copyright">
                  SysIGR LTD 2022 ©. All rights reserved.{" "}
                </p>
              </Col>
              <Col lg={2} className="column">
                <p className="heading">Information</p>
                {/* <a className="link" href="/Mission">
                  Mission
                </a>
                <a className="link" href="/About">
                  About Us
                </a> */}
                <a className="link" href="#Testimonials">
                  Testimonials
                </a>
                <a className="link" href="#Contact">
                  Contact Us
                </a>
              </Col>
              <Col lg={2} className="column">
                <p className="heading">Services</p>
                <a className="link" href="#plans">
                  Plans
                </a>
                {/* <a className="link" href="/Product">
                  Get The Kit
                </a>
                <a className="link" href="#free">
                  Free Service
                </a> */}
              </Col>
              <Col lg={2} className="column">
                <p className="heading">Help</p>
                <a className="link" href="#help">
                  Help Center
                </a>
                <a className="link" href="#Contact">
                  Contact Support
                </a>
                {/* <a className="link" href="/Product">
                  Instructions
                </a>
                <a className="link" href="/Product">
                  How it works
                </a> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
