import React from 'react';
import './CSS/guide.css';
import {Link} from 'react-router-dom';
import mal from './CSS/IMAGE/maldives.jpg';
import him from './CSS/IMAGE/him.jpg';
import souvik from './CSS/IMAGE/souvik.jpg';
export default function Guides() {
  return (
    <>
        <div className='guide'>
            <div className='left'>
                <h>Speak to a specialist to start planning your Holidays...</h>
                <p>Call one of our experts to know details ...</p>
                <div className='contact'>
                    <p1>+91 9903074062</p1>
                    <Link to="/contact"><button className='enquiery'>Make an Enquiery</button></Link>
                </div>
            </div>
            <div className='right'>
                <div className='expert'><img src={mal}/><br/><h>Santu<br/>Chakraborty</h></div>
                <div className='expert'><img src={him}/><br/><h>Something<br/>Else</h></div>
                <div className='expert'><img src={souvik}/><br/><h>Souvik<br/>Aditya</h></div>
            </div>
            <div className='pics'>
                <p>Call one of our experts to know details ...</p>  
                <div className='contact'>
                    <p1>+91 9903074062</p1>
                    <Link to="/contact"><button className='enquiery'>Make an Enquiery</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}
