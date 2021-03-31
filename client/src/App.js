import React, { Profiler } from 'react'
import NavBAr from './components/NavBar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import CretePost from './components/screens/CreatePost'
function App() {
  return (
    <BrowserRouter>
      <NavBAr></NavBAr>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
      <Route path="/create">
        <CretePost></CretePost>
      </Route>

    </BrowserRouter>
   
  );
}

export default App;
