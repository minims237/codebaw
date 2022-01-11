import { Component } from 'react';
import { Link } from 'react-router-dom';
import './components/styles/NewAssociation.css'
class NewMember extends Component{
    render(){
        return(<div className='inp'>
            <div className="topBar ">
           <h3>Ajouter un membre</h3>
       </div>
       <div className='inpE'>
            <div className='inputElement'>
                <label>Nom</label>
                <input type='text'/>
            </div>
            <div className='inputElement'>
                <label>Prenom</label>
                <input type='text'/>
            </div>
            <div className='inputElement'>
                <label>Quartier</label>
                <select>
                    <option>m</option>
                </select>
            </div>
            <div className='inputElement'>
                <label>Ville de residence</label>
                <select>
                    <option>m</option>
                </select>
            </div>
            <div className='inputElement'>
                <label>Numero de telephone</label>
                <input type='text'/>
            </div>
            <div className='inputElement'>  
                <input type='submit ' value="Ajouter" className='btnS'/>
            </div></div>
        </div>)
    }
}
export default NewMember