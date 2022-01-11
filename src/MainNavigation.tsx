import { Component } from 'react';
import TopBar from './components/TopBar';
import SideBarLeft from './components/SideBarLeft.component';
import Menu from './Menu.component';
class MainNavigation extends Component{
    render(){
        return(
            <div className="app">
            <div className="app__left">
              <SideBarLeft/>
            </div>
            <div className="app__right">
              <TopBar />
              <Menu/>
            </div>
            </div>
        )
    }
}

export default MainNavigation