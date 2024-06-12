
import './App.css'
import {Switch,Route} from "react-router-dom"
import JoinBuzz from './pages/joinBuzz'
import Login from './pages/login'
import Welcome from './pages/welcome'
import Home from './pages/home'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Header from './components/header/header'
function App() {
 

  return (
  <>
    <Switch>
      <Route exact path="/">Join the buzz
      <JoinBuzz />
      </Route>
      <Route exact path="/login">Login
      <Header/>
      <Login />
      </Route>
      <Route exact path="/welcome">  
      <Welcome />
      </Route>
      <Route exact path="/home">Watch movies
      <Header/>
      <Home />
      </Route>
    </Switch>
    <div className="nav-bar">
      <Link className="nav-bar-link" to="/">Initial</Link>
      <Link className="nav-bar-link" to="/login">Login</Link>
      <Link className="nav-bar-link" to="/welcome">Profiles</Link>
      <Link className="nav-bar-link" to="/home">Home</Link>
    </div>
  </>
  )
}

export default App
