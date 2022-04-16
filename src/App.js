import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Home from './views/Home'
import MyGames from './views/MyGames'
import AddGames from './views/AddGames'
import Profile from './views/Profile'
import Logout from './views/Logout'

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/MyGames">
            <MyGames />
          </Route>
          <Route exact path="/AddGames">
            <AddGames />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
