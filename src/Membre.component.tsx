import { Component } from "react";
import { Tab, Table } from "react-bootstrap";
import { HashRouter as Router, Link } from "react-router-dom";
import "./components/styles/membre.css";
class Membre extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="user_contener">
            <div className="topBar position">
              <h3>Liste des Membres</h3>
              <div className="btnspace">
                {" "}
                <Link to="/main/newasso">
                  {" "}
                  <button>+ Ajouter un membre </button>
                </Link>
              </div>
              <div className="btnspace">
                <Link to="/main/newasso">
                  {" "}
                  <button>+ Ajouter une association </button>
                </Link>
              </div>
            </div>
            <div className="table">
              <Table  hover responsive striped bordered >
                
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Nom et Prenom</th>
                    <th>Sexe</th>
                    <th>Quartier</th>
                    <th>Pays de Residence</th>
                    <th>Ville de Residence</th>
                    <th>Numeo de Telephone</th>
                  </tr>
                  <tr >
                    <td>1</td>
                    <td > ANDERSON</td>
                    <td>MASCULIN</td>
                    <td>SEULAH</td>
                    <td>CAMEROUN</td>
                    <td>YAOUNDE</td>
                    <td>655448899</td>
                  </tr>
                   <tr>
                    <td>1</td>
                    <td>NGUIMATSA ANDERSON</td>
                    <td>MASCULIN</td>
                    <td>SEULAH</td>
                    <td>CAMEROUN</td>
                    <td>YAOUNDE</td>
                    <td>655448899</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default Membre;
