import React from 'react';
import './CSS/home.css';
import mal from './CSS/IMAGE/maldives.jpg';
import him from './CSS/IMAGE/him.jpg';
import sea from './CSS/IMAGE/sea.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
export default function Card() {
    let imgStyle={
        width:"100%",
        borderTopLeftRadius:"10px", 
        borderTopRightRadius:"10px" 
    }
  return (
      <>
      <div className=' main-heading'>
          <h3>Our Tours</h3>
          <p><span>Browse our Destinations to start planning your next Adventure.<br/></span>We arrange trips to more than 80 destinations throughout the world and across each continent.</p>
      </div>
    <div className='main-class'>
        <div className='inner-class' id='try'>
            <img src={sea} style={imgStyle}/>
            <div className='write'>
                <h>West Bengal</h><br/>
                <p>Enjoy Jungle Safari(Dooars),Nature Beyond(Darjeeling with Sikkim),Unseen Beauty(Kalimpong and etc) and many more with us.</p>
                    <br/>
                <button className='event'>Learn More <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/></button>
            </div>
        </div>
        <div className='inner-class'>
            <img src={him} style={imgStyle}/><br/><br/>
            <div className='write'>
                <h>National</h><br/>
                <p>Let's go for Silk Route(Sikkim),Delightful Destiny(Andhra Pradesh),God's Nest(Uttaranchal),Traditional(North India) and many more with us.</p><br/>
                <button className='event'>Learn More <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/></button>
            </div>
        </div>
        <div className='inner-class'>
            <img src={mal} style={imgStyle}/>
            <div className='write'>
                <h>International</h><br/>
                <p>We're excited to launch Thiland,Dubai,Maldives,Singapore,Indonesia Tour in minimum and exciting price range.</p><br/><br/>
                <button className='event'>Learn More <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/></button>
            </div>
        </div>
    </div>
        <div style={{textAlign:"center"}}>
            <Link to="/tour"><button className='all'>View All Destinations<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/></button></Link>
        </div>
    </>
  )
}
