import React,{useState} from 'react'
import Axios from 'axios'; 

export default function AddBooking() {
    const[place,setPlace]=useState("");
    const[date,setDate]=useState("");
    const[days,setDays]=useState("");
    const[fare,setFare]=useState("");

    const addPackage =() =>{
        Axios.post('http://localhost:3001/add',{
        place:place,
        dates:date,
        days:days,
        fare:fare
    }).then(()=>{
        alert("Inserted !");
    });
    // console.log("hello");
    };
  return (
    <>
        <div className='container'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Place</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setPlace(event.target.value)}} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Dates</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setDate(event.target.value)}} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">No. Of Days</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setDays(event.target.value)}} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fare</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setFare(event.target.value)}} />
            </div>
            <button class="btn btn-primary me-md-2" type="button" onClick={addPackage}>Add</button>
        </div>
    </>
  )
}
