import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";

import { Input } from "antd";

class IndividualDashboard extends React.Component {
  V = { value: "hello" };
  render() {
    return (
      <div>
        <HeaderBox background="gradient">
          <Col align="center">
            <br />
            <h6>Individual Dashboard</h6>
          </Col>
          <Row className="mx-0 flex-column-reverse flex-lg-row">
            <Col
              lg={6}
              className="px-0 my-auto"
              md={11}
              sm={12}
              xs={24}
              align="center"
            >
              <Link to="/ChatRoom">
                <Button text={"white"} width={"20rem"}>
                  Go to the Chatroom
                </Button>
              </Link>

              <br />
              <br />
              <br />
              <Link to="/Product">
                <Button
                  text={"white,#DA4459"}
                  width={"20rem"}
                  color={"transparent"}
                  // text={"#DA4459"}
                >
                  Upgrade Account
                </Button>
              </Link>
            </Col>
            <Col lg={6} md={11} sm={12} xs={24}>
              <img src="Assets/svg/chat-illustration.svg" width="90%" />
            </Col>
          </Row>
        </HeaderBox>
        <br />
        <br />
      </div>
    );
  }
}

export default IndividualDashboard;
// fait