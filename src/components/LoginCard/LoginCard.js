import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

import "./styles.css";
class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "sigr.gr@gmail.com") {
      this.props.history.push("/IndividualDashboard");
    }
    if (this.state.value === "gr@gmail.com") {
      this.props.history.push("/EntrepriseDashboard");
    }

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Col className="col-login">
          <Card className="styledCard-login">
            <Card.Img variant="top" src="" className="image" />
            <Card.Body className="body-login">
              <Card.Title className="title-login">
                <h6>Login to Your Account!</h6>
              </Card.Title>
              <Card.Text className="text-login"></Card.Text>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group-login">
                  <label>Email*</label>
                  <input
                    type="email"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="form-control-login"
                    placeholder="Enter email"
                  />
                </div>
                <br/>
                <div className="form-group-login">
                  <label>Password*</label>
                  <input
                    type="password"
                    className="form-control-login"
                    placeholder="Enter password"
                  />
                </div>
                <br/>
                <button type="submit" className="btn btn-lg btn-block">
                  Login
                </button>
                <p className="forgot-password-login text-right">
                  Don't have an account,<a href="/Signup"> Create One!</a>
                </p>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default withRouter(LoginCard);

// handleChange   handleSubmit     Render
