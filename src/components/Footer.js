import React from "react";
import './CSS/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faMailReply } from '@fortawesome/free-solid-svg-icons';

 export default function Footer(){

    return(
        <>
           <footer class="container-fluid bg-grey py-5">
<div class="main-container">
   <div class="row">
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 ">
               <div class="logo-part">
                  <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer" alt="image" />
                  <p>Reg. Off.: SANTU CHAKRABORTY</p>
                  <p>CHINSURAH STATION ROAD,TALIKHOLA,CHINSURAH R.S,HOOGHLY,PIN-7120103</p>
               </div>
            </div>
            <div class="col-md-6 px-4">
               <h6> About </h6>
               <p>L.F.C / L.T.C. / L.T.A. Approved State Govt. Regd : 2905</p>
               <a href="/" class="btn-footer"> More Info </a><br/>
               <a href="/" class="btn-footer"> Contact Us</a>
            </div>
         </div>
      </div>
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 px-4">
               <h6>Services</h6>
               <div class="row ">
                  <div class="col-md-6">
                     <ul>
                        <li> <a href="/"> Home</a> </li>
                        <li> <a href="/"> About</a> </li>
                        <li> <a href="/"> Service</a> </li>
                        <li> <a href="/"> Team</a> </li>
                        <li> <a href="/"> Help</a> </li>
                        <li> <a href="/"> Contact</a> </li>
                     </ul>
                  </div>
                  <div class="col-md-6 px-4">
                     <ul>
                        <li> <a href="/"> Cab Faciliy</a> </li>
                        <li> <a href="/"> Fax</a> </li>
                        <li> <a href="/"> Terms</a> </li>
                        <li> <a href="/"> Policy</a> </li>
                        <li> <a href="/"> Refunds</a> </li>
                        <li> <a href="/"> Paypal</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-md-6 ">
               <h6> Contacts</h6>
               <div class="social">
                  <a href="/" style={{paddingRight:"10px",fontSize:"1.8rem"}}><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="/"style={{paddingRight:"10px",fontSize:"1.8rem",color:"red"}}><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="/"style={{paddingRight:"10px",fontSize:"1.8rem"}}><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="/"style={{paddingRight:"10px",fontSize:"1.8rem",color:"red"}}><FontAwesomeIcon icon={faMailReply} /></a>
               </div>
                  <p>adventurousessence2022@gmail.com<br/><br/>adventurousessence@yahoo.com</p>
            </div>
         </div>
      </div>
   </div>
</div>
</footer>
        </>
    )
}