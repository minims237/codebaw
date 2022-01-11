import { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./styles/TopBar.css";
class TopBar extends Component {
  render() {
    return (
      <div className="contener__top">
        <div className="input-icone"></div>
        <div className="icons">
          <div className="icons__first">
            <Icon.Bell size={20} />
            <div><p>Aurelien Djemo</p></div>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default TopBar;
