import React from 'react';
import './CSS/service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Service() {
  return (
    <>
      <div className='head'>
        <h3>OUR SERVICES</h3>
        <p>Adventurous Essence is a IRCTC Authorized Agency.You can reliably use this services.</p>
      </div>
        <div className='service'>
          <div className='inner1'>
                <div className="inner-service"><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Railway Ticket Bookings</div>
                <div className="inner-service"><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Hotel Bookings</div>
                <div className="inner-service"><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Car Rentals</div>
                <div className='inner-service'><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Flight Booking (Domestic & International)</div>
          </div>
          <div className='inner2'>
              <div className='inner-service'><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Visa Endorsement</div>
              <div className='inner-service'><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>PassPort & Visa Assitance</div>
              <div className='inner-service'><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>Online Tour Packages Booking</div>
              <div className='inner-service'><FontAwesomeIcon icon={faStar} style={{marginRight:"10px"}}/>EMI Availaible</div>
            </div>
        </div>
    </>
  )
}
