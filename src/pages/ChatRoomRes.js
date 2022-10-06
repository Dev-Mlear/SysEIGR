import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import ChatRes from "../components/ChatRoomRes/ChatRes";

class IndividualDashboard extends React.Component {
  V = { value: "hello" };
  render() {
    return (
      <div>
        <HeaderBox background="gradient">
          <ChatRes />
        </HeaderBox>
        <br />
        <br />
      </div>
    );
  }
}

export default IndividualDashboard;
