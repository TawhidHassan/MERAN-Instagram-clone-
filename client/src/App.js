import React,{useEffect,createContext,useReducer,useContext} from 'react'
import NavBAr from './components/NavBar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import CretePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'



export const UserContext=createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/login')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CretePost/>
      </Route>
      
      
    </Switch>
  )
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBAr />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
