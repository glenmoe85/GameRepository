// Edits made here by all team members
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import AddGames from './views/AddGames'
import Logout from './views/Logout'
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
          <Route exact path="/addgames">
            <AddGames />
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
