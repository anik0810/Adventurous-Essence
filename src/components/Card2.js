import React from "react";
import "./CSS/home.css";
import honey from "./CSS/IMAGE/honeymoon.webp";
import lion from "./CSS/IMAGE/lion.webp";
import mountain from "./CSS/IMAGE/mountain.webp";
import luxury from "./CSS/IMAGE/luxury.webp";
import drive from "./CSS/IMAGE/drive.webp";
import beach from "./CSS/IMAGE/beach.webp";


export default function Card2() {
  return (
    <>
      <div data-aos="fade-up" className=" main-heading-2">
        <h3>Holiday ideas to match your interests</h3>
        <p>
          <span>
            Browse our Destinations to start planning your next Adventure.
            <br />
          </span>
          We arrange trips to more than 80 destinations throughout the world and
          across each continent.
        </p>
      </div>

      <div data-aos="fade-up" className="container">
        <div className="columns_first">
          <div className="column is-one-quarter">
            <img src={lion} alt="lion" />
            <div className="caard-body">
              <h>Safari Holidays</h>
            </div>
          </div>
          <div className="column is-one-quarter">
            <img src={beach} alt="beach" />
            <div className="caard-body">
              <h>Beach Holidays</h>
            </div>
          </div>
          <div className="column is-one-quarter">
            <img src={drive} alt="drive" />
            <div className="caard-body">
              <h>Adventure Holidays</h>
            </div>
          </div>
        </div>

        <div className="columns_last">
          <div className="column is-one-quarter">
            <img src={honey} alt="honey" />
            <div className="caard-body">
              <h>Honey Moon Holidays</h>
            </div>
          </div>
          <div className="column is-one-quarter">
            <img src={mountain} alt="mountain" />
            <div className="caard-body">
              <h>Mountain Holidays</h>
            </div>
          </div>
          <div className="column is-one-quarter">
            <img src={luxury} alt="luxury" />
            <div className="caard-body">
              <h>Luxury Holidays</h>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
