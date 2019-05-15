import React, {Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import FeatureLista from './Components/FeatureLista';
import FeatureMapa from './Components/FeatureMapa';


class App extends Component {
  render(){
    return (
      <div>        
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/features/lista' exact component={FeatureLista}/>
            <Route path='/features/mapa' exact component={FeatureMapa}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
