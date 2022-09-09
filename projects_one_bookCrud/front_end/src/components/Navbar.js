import React from 'react'
import "../global.css"
import { NavLink } from 'react-router-dom'
// import Dashboard from './admin/Dashboard';

const Navbar = () => {
  return (
    <div>


<nav >
        <div className="logo"><NavLink  to="/" >BooKCarRt</NavLink></div>

        <div className="links">

          <ul>    
          <li><NavLink to="/dashboard" >Dashboard</NavLink></li>  
          <li><NavLink  to="/book" >BOOK</NavLink></li>
          <li><NavLink to="/dashboard/addbook" >ADD BOOK</NavLink></li>
         
          </ul>
        </div>
       </nav>
    </div>
  )
}

export default Navbar