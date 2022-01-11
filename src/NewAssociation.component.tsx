import { Component } from 'react';
import { Link } from 'react-router-dom';
import './components/styles/NewAssociation.css'
class NewAssociation extends Component{
    render(){
        return(<div className='inp'>
            <div className="topBar ">
           <h3>Ajouter une association</h3>
       </div>
       <div className='inpE'>
            <div className='inputElement'>
                <label>Nom de l'association</label>
                <input type='text'/>
            </div>
            <div className='inputElement'>
                <label>Pays siège</label>
                <select>
                    <option>m</option>
                </select>
            </div>
            <div className='inputElement'>
                <label>Ville siège</label>
                <select>
                    <option>m</option>
                </select>
            </div>
            <div className='inputElement'>
                <label>Numero de telephone</label>
                <input type='text'/>
            </div></div>
            <div className='inputElement'>  
                <input type='submit ' value="Ajouter" className='btnS'/>
            </div></div>
        )
    }
}
export default NewAssociation