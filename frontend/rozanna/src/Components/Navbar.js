import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
  

    
<nav className=" nav py-0 text-white flex justify-between">
<img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-12 pt-3 px-3 rounded-2xl " alt=""></img>
<ul className="flex px-4 py-4 space-x-11 justify-end">
  <li className="mx-2 cursor-pointer ">
  <Link  to="/">Home </Link>
  </li>
  <li className="mx-2 cursor-pointer ">
  <Link  to="help">Contact Us</Link>
  </li>
  <li className="mx-2 cursor-pointer ">
  <Link  to="/register" style={{decoration: 'none'}}>Sign Up</Link>
  </li>
</ul>
</nav>



    
  )
}

export default Navbar