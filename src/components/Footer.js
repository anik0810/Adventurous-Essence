import React from "react";
import './CSS/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 const footer =()  => {

    return(
        <>
           <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h3>Adventurous Essence</h3>
              <div className="about">
              <p1>Reg. Off. : SANTU CHAKRABORTY<br/></p1>
              <p2>CHINSURAH STATION ROAD,TALIKHOLA<br/>CHINSURAH R.S,HOOGHLY<br/>PIN - 712103</p2>
            </div>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Due Balance</a></li>
                <li><a href="#">Booking status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Photos</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}
export default footer;