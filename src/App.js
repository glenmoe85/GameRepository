import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Games from './components/Games'
import Home from './views/Home'
import PageOne from './views/PageOne'
import PageTwo from './views/PageTwo'
import PageThree from './views/PageThree'
import PageFour from './views/PageFour'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/PageOne">
            <PageOne />
          </Route>
          <Route exact path="/PageTwo">
            <PageTwo />
          </Route>
          <Route exact path="/PageThree">
            <PageThree />
          </Route>
          <Route exact path="/PageFour">
            <PageFour />
          </Route>
          <Route exact path="/Games">
            <Games />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
