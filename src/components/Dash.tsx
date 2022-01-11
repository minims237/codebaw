import { Component } from "react";
import "./styles/Dash.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Dash extends Component {
  render() {
    return (
      <div className="dash_contener">
        <div className="topBar position">
           <div className="btnspace">   <Link to="/main/newmember"> <button>+ Ajouter un membre </button></Link></div>
        <div  className="btnspace"><Link to="/main/newasso"> <button>+ Ajouter une association </button></Link></div>
       </div>
        <div className="dash_contener_group">
          <div className="dash_contener_group_user">
            <h5>Association</h5>
            <div className="dash_contener_group_user__texte">
              <div className="bgc">
                <a href=""> liste des membres </a>
              </div>
              <div className="bgc"> <a href=""> Etat financier</a></div>
             
            </div>
          </div>
          <div className="dash_contener_group_notification"></div>
        </div>
        <div className="dash_contener_post"></div>
      </div>
    );
  }
}

export default Dash;
