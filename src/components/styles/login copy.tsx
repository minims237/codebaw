import { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  render() {
    return (
      <div className="logCnt">
        <Router>
          <div className="logBlog">
            <div>
              <p>Login to Dashboard</p>
            </div>
            <div className="logAvatar"></div>
            <div className="logInput">
              <input type="text" placeholder=" username" />
            </div>
            <div className="logInput">
              <input type="text" placeholder=" password" />
            </div>
            <div className="bt">
              <Link to="/main"><a>Sign In</a></Link>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Login;
