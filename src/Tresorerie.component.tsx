import { Component } from "react";
import { Table, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Toggle2On } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./components/styles/tresorerie.css";
class Tresererie extends Component {
  render() {
    return (
      <div className="post__contener">
        <div className="topBar">
            <h3>Trésorerie</h3>
        </div>
        <div className="ctnr">
          <div className="inlB">
            <div className="inlB__1">
              {" "}
              <input name="tre" type="radio" id="1" checked />
              <label>Par membre</label>
              <input name="tre" type="radio" id="2" />
              <label>Par association</label>
            </div>
            <div>
              {" "}
              <h5>Total  des contributions</h5>
            </div>

            <div>
              {" "}
              <h5>140 000 00 FCFA</h5>
            </div>
          </div>
          <div >
            <Table hover responsive striped bordered>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Nom et Prenom</th>
                  <th>Sexe</th>
                  <th>Quartier</th>
                  <th>Pays de Residence</th>
                  <th>Ville de Residence</th>
                  <th>Numero de Telephone</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td> ANDERSON</td>
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
      </div>
    );
  }
}
export default Tresererie;
