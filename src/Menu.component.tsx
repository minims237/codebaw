import { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dash from './components/Dash';
import NewAssociation from './NewAssociation.component';
import NewMember from './NewMember.component';
import Membre from './Membre.component';
import Tresererie from './Tresorerie.component';
import Communique from './Communique.component';
import Suggestion from './Suggestion.component';
class Menu extends Component{
    render(){
        return(
            <Switch>
              <Route path="/main" exact component={()=><Dash/>}/>
              <Route path="/main/newasso" exact component={()=><NewAssociation/>}/>
              <Route path="/main/newmember" exact component={()=><NewMember/>}/>
              <Route path="/main/membre" exact component={()=><Membre/>}/>
              <Route path="/main/tresorerie" exact component={()=><Tresererie/>}/>
              <Route path="/main/comunique" exact component={()=><Communique/>}/>
              <Route path="/main/suggestion" exact component={()=><Suggestion/>}/>
            </Switch>
        )
    }
}
export default Menu;