
import './App.css'
import {Switch,Route} from "react-router-dom"
import JoinBuzz from './pages/joinBuzz'
import Login from './pages/login'
import Welcome from './pages/welcome'
import Home from './pages/home'
function App() {
 

  return (
    <>
    <Switch>
      <Route exact path="/">Join the buzz
      <JoinBuzz/>
      </Route>
      <Route path="/login">Login
      <Login/>
      </Route>
      <Route path="/welcome">Profiles
      <Welcome/>
      </Route>
      <Route path="/home">Watch movies
      <Home/>
      </Route>
    </Switch>
       
    </>
  )
}

export default App
