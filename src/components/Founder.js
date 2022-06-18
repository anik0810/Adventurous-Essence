import React from "react";
import ban from "./CSS/IMAGE/Banshi.jpg";
import yami from "./CSS/IMAGE/yami.jpg";
import "./CSS/founder.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default function Founder() {
  return (
    <>
      <div className="founder">
        <div className="left_founder">
          <div data-aos="fade-right" className="founder1">
            <img src={ban} style={{ width: "15rem" }} /><br/>
            <h>Late Banshi Badan Mondal</h>
          </div>
        </div>
        <div data-aos="fade-up" className="middle_founder">
          <h>Founders of Adventurous Essence</h>
          <p>
            The Adventurous Essence is established by Santu Chakraborty inspired by Banshi Badan Mondal on 19 th April,2022.
            We have an aim to complete your dream to visit around the globe. So.. You Dream It...We Plan it.
          </p>
          <div style={{textAlign:"center"}}>
            <Link to="/tour"><button className='all'>More Details<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/></button></Link>
        </div>
        </div>
        <div className="right_founder">
          <div data-aos="fade-left" className="founder2">
            <img src={yami} style={{ width: "10rem" }} /><br/>
            <h>Yami Chakraborty</h>
          </div>
        </div>
      </div>
    </>
  );
}
