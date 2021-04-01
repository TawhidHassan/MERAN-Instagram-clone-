import React from 'react'
import {Link } from 'react-router-dom'
const NavBar=()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <a className="brand-logo"><Link to="/">Instagram</Link></a>
          <ul id="nav-mobile" className="right">
            <li key="1"><i className="large material-icons">search</i></li>,
            <li key="2"><Link to="/profile">Profile</Link></li>,
            <li key="3"><Link to="/create">Create Post</Link></li>,
            <li key="4"><Link to="/myfollowingpost">My following Posts</Link></li>,
            <li key="2"><Link to="/login">login</Link></li>,
            <li key="2"><Link to="/signup">SignUp</Link></li>,
          </ul>
        </div>
      </nav>
    );
}


export default NavBar;