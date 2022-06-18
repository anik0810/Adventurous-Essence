import React, { useState } from "react";
import Axios from "axios";
import "./CSS/balance.css";

export default function Balance() {
  const [id, setId] = useState("");
  const [balance, setBalance] = useState([]);
  const checkBalance = () => {
    Axios.post("http://localhost:3001/balance", {
      id: id,
    }).then((response) => {
      setBalance(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <div className="main">
        <div className="sub-main">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Enter Your id here
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="ADVE321046"
            onChange={(event)=>{setId(event.target.value)}}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your Details with anyone else.
          </div>
        </div>
        <div className="view">
        <button type="submit" class="btn btn-primary" onClick={checkBalance}>
          View Details
        </button>
        </div>
        <br />
      </div>
      </div>

      <div className="card-body">
        {balance.map((key, val) => {
          return (
            <>
            <div className="details">
                <label>Name</label><br/>
                <p>{key.name}</p>
            </div>
            <div className="details">
                <label>Phone no</label><br/>
                <p>{key.phone_no}</p>
            </div>
            <div className="details">
                <label>Total Ammount</label><br/>
                <p>{key.ammount}</p>
            </div>
            <div className="details">
                <label>Paid Ammount</label><br/>
                <p>{key.paid}</p>
            </div>
            <div className="details">
                <label>Due Ammount</label><br/>
                <p>{key.ammount - key.paid}</p>
            </div>
            <div className="details">
                <label>Tour Date</label><br/>
                <p>{key.tour_date}</p>
            </div>
            <div className="details">
                <label>Tour</label><br/>
                <p>{key.tour}</p>
            </div>
            <div className="details">
                <label>Booking Date</label><br/>
                <p>{key.booking_date}</p>
            </div>
            </>
          );
        })}
        </div>
    </>
  );
}
