import React from 'react';
// import { a } from 'react-router-dom';

export default function Navbar() {
    // eslint-disable-next-line no-lone-blocks
    {
    let changeStyle={ 
        backgroundColor:"#fdf4d6"
    }
    let mohref={
        fontFamily:"Merriweather",
        fontSize:"1.2rem",
        color:"rgb(248, 86, 113)",
        fontStyle:"italic",
        letterSpacing:"4px"
    }
    let spanStyle={
        fontFamily:"Merriweather",
        fontSize:"1rem",
        color:"rgb(248, 86, 113)",
        fontWeight:"500",
        fontStyle:"italic",
        textAlign:"center"
    }
  return (
    <>
            
            <nav className="navbar navbar-expand-lg navbar-light " style={changeStyle}>
            <div className="container-fluid d-flex" >
                <a className="navbar-brand px-2" href="#" style={moto}>You Dream It.<div style={spanStyle}>We Plan It.</div></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ }}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <a className="nav-a active" aria-current="page" href="/">HOME</a>
                    </li>
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <a className="nav-a active" aria-current="page" href="/booking">BOOKINGS</a>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"1rem"}}>
                        <a className="nav-a dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SERVICES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/contact">Railway Ticket</a></li>
                        <li><a className="dropdown-item" href="/contact">Flight Ticket</a></li>
                        <li><a className="dropdown-item" href="/contact">About Visa</a></li>
                        <li><a className="dropdown-item" href="/contact">Hotel Booking</a></li>
                    </ul>
                    </li>
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <a className="nav-a active" aria-current="page" href="/family">OUR FAMILY</a>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"1rem"}}>
                        <a className="nav-a dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        GALLERIES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Domestic Tours</a></li>
                        <li><a className="dropdown-item" href="#">International Tour</a></li>
                    </ul>
                    </li>
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <a className="nav-a active" aria-current="page" href="/contact">CONTACT US</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</>
  )
}
}
