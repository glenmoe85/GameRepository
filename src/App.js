import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import MyGames from './views/mygames'
import Register from './views/Register'
import AddGames from './views/addgames'
import Profile from './views/Profile'
import Logout from './views/Logout'
import Contact from './views/Contact'

function App() {
  return (
    <Router>
      <div>        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/MyGames">
            <MyGames />
          </Route>
          <Route exact path="/addgames">
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
