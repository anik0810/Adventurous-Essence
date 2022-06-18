import React, { useState,useEffect} from 'react'
import Axios from 'axios';
export default function TourList() {
  const [tour,setTour]=useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:3001/tour',{
    }).then((response)=>{
      setTour(response.data);
    });
  });
  return (
    <>
        <div className='container mt-4'>
          {/* <button onClick={getTourList}>GetData</button> */}
        <table class="table">
  <thead>
    <tr style={{color:"rgb(98 173 251)"}}>
      <th scope="col">Places</th>
      <th scope="col">Dates</th>
      <th scope="col">No. of Days</th>
      <th scope="col">Fare per person</th>
      <th scope="col">Bookings</th>
    </tr>
  </thead>

  {
    tour.map((val,key)=>{
      return(
        <tbody>
    <tr>
      <td>{val.place}</td>
      <td>{val.dates}</td>
      <td>{val.days}</td>
      <td>{val.fare}</td>
      <td><button type="button" class="btn btn-warning" aria-pressed="true">Book</button></td>
    </tr>
  </tbody>
      )})
  }
  
</table>
        </div>
    </>
  )
}
