import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import Chat from "../components/ChatRoom/Chat";



class IndividualDashboard extends React.Component {
  V = { value: "hello" };
  render() {
    return (
      <div>
        <HeaderBox background="gradient">
          <Chat />
        </HeaderBox>
        <br />
        <br />
      </div>
    );
  }
}

export default IndividualDashboard;
