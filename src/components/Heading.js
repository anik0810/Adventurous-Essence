import React from 'react'
import './CSS/heading.css';
import logo from './CSS/IMAGE/logo.svg';


export default function Navbar() {
  return (
    <>
      <div class="topnav">
        {/* <button type="button" class="btn btn-primary">Mail Us</button> */}
        <a>Mail Us</a>
        <a>Call Us <span> </span> <span>📞+91 9903074062 </span><span> </span> or </a>
        <a>About</a>
        <a>🏳️‍⚧️ India</a>
        <a><img src={logo} style={{width:"2.6rem"}}></img>DVENTUROUS ESSENCE</a>
      </div>
  </>
  )
}
