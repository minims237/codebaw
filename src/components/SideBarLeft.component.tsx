import { Component } from "react";
import "./styles/SlideBarLeft.component.css";
import * as Icon from "react-bootstrap-icons";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class SideBarLeft extends Component {
  render() {
    return (
      <div>
        <div className="contener">
          <div className="container__profil">
            <h3>CODEBAT</h3>
          </div>
          <div className="container__menu">
            <nav>
              <div className="ul">
                <div className="li">
                  <Link to="/main">
                    <Icon.PeopleFill />
                  &nbsp;&nbsp;&nbsp; Liste des Associations
                  </Link>
                </div>
                <div className="li">
                  <Link to="/main/membre">
                    <Icon.People />
                    &nbsp;&nbsp;&nbsp; Liste des membres
                  </Link>
                </div>
                <div className="li">
                  <Link to="/main/tresorerie">
                    <Icon.Bank />
                    &nbsp;&nbsp;&nbsp; Tresorerie
                  </Link>
                </div>
                <div className="li">
                  <Link to="/main/comunique">
                    <Icon.Megaphone />
                    &nbsp;&nbsp;&nbsp; Comuniques
                  </Link>
                </div>
                <div className="li">
                  <Link to="/main/suggestion">
                    <Icon.BookFill />
                    &nbsp;&nbsp;&nbsp; Suggestions
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarLeft;
