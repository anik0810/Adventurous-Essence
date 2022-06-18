import React from 'react'
import './CSS/heading.css';
import a from './CSS/IMAGE/a.png';
import e from './CSS/IMAGE/e1.png';


export default function Navbar() {
  return (
    <>
      <div class="topnav ">
        {/* <button type="button" class="btn btn-primary">Mail Us</button> */}
        <a1>Mail Us</a1>
        <a1>Call Us <span> </span> <span>📞+91 9903074062 </span><span> </span> or </a1>
        <a1>About</a1>
        <a1>🏳️‍⚧️ India</a1>
        <a1><img src={a} style={{width:"2.6rem"}}></img>DVENTUROUS <img src={e} style={{width:"1.8rem"}}></img>SSENCE</a1>
      </div>
  </>
  )
}
