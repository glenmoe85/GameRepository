import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import MyGames from './views/MyGames'
import Register from './views/Register'
import AddGames from './views/AddGames'
import Profile from './views/Profile'
import Logout from './views/Logout'
import Contact from './views/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <Navbar/>
      <div>        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/mygames">
            <MyGames />
          </Route>
          <Route exact path="/addgames">
            <AddGames />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
