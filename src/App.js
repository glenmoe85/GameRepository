import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import MyGames from './views/MyGames'
import Register from './views/Register'
import AddGames from './views/AddGames'
import Profile from './views/Profile'
import Logout from './views/Logout'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register">
            <Register />
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
