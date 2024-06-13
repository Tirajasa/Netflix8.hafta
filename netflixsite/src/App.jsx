
import './App.css'
import {Switch,Route} from "react-router-dom"
import JoinBuzz from './pages/joinBuzz'
import Login from './pages/login'
import Welcome from './pages/welcome'
import Home from './pages/home'
import { Link } from 'react-router-dom'
import Header from './components/header/header'
import { useState } from 'react'
import { Kiddo } from './components/welcome/kiddo'
import {Watch} from './pages/watch'
function App() {
 
  const [activeP,setActiveP]=useState(null);
  const[elma,setElma]=useState(null)
  return (
  <>
    <Switch>
      <Route exact path="/">Join the buzz
      <JoinBuzz elma={elma}/>
      </Route>
      <Route exact path="/login">Login
      <Header activeP={activeP}/>
      <Login />
      </Route>
      <Route exact path="/welcome">  
      <Welcome setActiveProfile={setActiveP} meyve={setElma}/>
      </Route>
      <Route exact path="/browse">Watch movies
      <Header activeP={activeP}/>
      <Home activeP={activeP}/>
      </Route>
      <Route exact path="/kids">Watch movies
      <Header activeP={activeP}/>
      <Kiddo activeP={activeP}/>
      </Route>
      <Route exact path="/watch:id">Watch movies
      <Header activeP={activeP}/>
      <Watch activeP={activeP}/>
      </Route>
    </Switch>
    <div className="nav-bar">
      <Link className="nav-bar-link" to="/">Initial</Link>
      <Link className="nav-bar-link" to="/login">Login</Link>
      <Link className="nav-bar-link" to="/welcome">Profiles</Link>
      <Link className="nav-bar-link" to="/browse">Home</Link>
    </div>
  </>
  )
}

export default App
