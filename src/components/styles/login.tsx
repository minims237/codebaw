import { Component } from "react";
import { Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  render() {
    return (
      <div className="logCnt">
        <Router>
          <div className="logBlog">
            <div className="logAvatar">
              {" "}
              <Icon.Person size={70} color="#2d87ff" />
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Username"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                ></Form.Control>
              </Form.Group>
            </Form>
            <div className="bt">
              <Link to="/main">
                <a>Sign In</a>
              </Link>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Login;
