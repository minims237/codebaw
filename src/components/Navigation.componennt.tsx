import { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import MainNavigation from '../MainNavigation';
import Login from './styles/login';

class Navigation extends Component{
    render(){
        return(
            <Switch>
              <Route path="/" exact component={()=><Login/>}/>
              <Route path="/main"  component={()=><MainNavigation/>}/>
              
            </Switch>
        )
    }
}
export default Navigation