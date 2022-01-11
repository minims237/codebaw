import { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './SlideBarRight.component.css'
class SideBarRight extends Component{
    render(){
        return(
            <div className="contner">
                <div className="container__body">
                     <Icon.Alarm/>
                </div>
            </div>
        )
    }
}
export default SideBarRight;