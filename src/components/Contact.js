import React from "react";
import './CSS/contact.css'

export default function Contact() {
  return (
    <>
        <div className="container" style={{marginTop:"3rem"}}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Phone No
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Adress Line 1
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Adress Line 2
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-4">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Query 
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Submit</button>
        
      </div>
      </div>
    </>
  );
}
