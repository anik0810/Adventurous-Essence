import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // eslint-disable-next-line no-lone-blocks
    {
    
    const openWhatsapp=()=>{
        window.open(`https://wa.me/+919903074062?text=Hello I'm ______ . I've a query about _____ .`);
    }

    let changeStyle={ 
        backgroundColor:"#fdf4d6"
    }
    let moto={
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
                <div className="navbar-brand px-2" style={moto}>You Dream It.<div style={spanStyle}>We Plan It.</div></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ }}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <Link className="nav-a active" aria-current="page" to="/" style={{textDecoration:"none"}}>HOME</Link>
                    </li>
                    <li className="nav-item"style={{paddingRight:"1rem"}}>
                        <Link className="nav-a active" aria-current="page" to="/booking" style={{textDecoration:"none"}}>BOOKINGS</Link>
                    </li>
                    <li className="nav-item dropdown"style={{paddingRight:"1rem"}} >
                        <Link className="nav-a dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration:"none"}}>
                        SERVICES
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={openWhatsapp} >Railway Ticket</a></li>
                        <li><a className="dropdown-item" onClick={openWhatsapp} >Flight Ticket</a></li>
                        <li><a className="dropdown-item" onClick={openWhatsapp} >About Visa</a></li>
                        <li><a className="dropdown-item" onClick={openWhatsapp} >Hotel Booking</a></li>
                    </ul>
                    </li>
                    <li className="nav-item"style={{paddingRight:"1rem"}} >
                        <Link className="nav-a active" aria-current="page" to="/family" style={{textDecoration:"none"}}>OUR FAMILY</Link>
                    </li>

                    <li className="nav-item"style={{paddingRight:"1rem"}} >
                        <Link className="nav-a active" aria-current="page" to="/balance" style={{textDecoration:"none"}}>BALANCE CHECK</Link>
                    </li>

                    <li className="nav-item"style={{paddingRight:"1rem"}} >
                        <Link className="nav-a active" aria-current="page" to="/contact" style={{textDecoration:"none"}}>CONTACT US</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</>
  )
}
}
