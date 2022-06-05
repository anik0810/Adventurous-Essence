import React, { useState } from 'react'
import Axios from 'axios';
export default function TourList() {
  const [tour,setTour]=useState([]);
  const getTourList =()=>{
    Axios.get('http://localhost:3001/tour',{
    }).then((response)=>{
      setTour(response.data);
      // console.log(response.data);
    });
  };
  let place;
  tour.map((val,key)=>{
    place=val.place;
    console.log(place);
  });
  return (
    <>
        <div className='container mt-3'>
          <button onClick={getTourList}>GetData</button>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Places</th>
      <th scope="col">Dates</th>
      <th scope="col">No. of Days</th>
      <th scope="col">Fare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{`${place}`}</td>
      <td>12 sep</td>
      <td>@twitter</td>
      <td>10000</td>
    </tr>
  </tbody>
</table>
        </div>
    </>
  )
}
