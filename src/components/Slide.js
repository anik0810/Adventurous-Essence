import React from 'react';
import cover1 from './CSS/IMAGE/sun.jpg';
import cover from './CSS/IMAGE/slide3.jpg';
import cover3 from './CSS/IMAGE/budha.jpg';
import cover2 from './CSS/IMAGE/slide1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CSS/home.css';

export default function Slide() {
    let slideStyle={
        height:"80vh",
        objectPosition:"center",
        objectFit:"cover"
    }
    let capStyle={
        fontSize:"2.2rem",
        fontFamily:"Merriweather",
        textShadow: "0 0 30px black",
        fontStyle:"italic",
        fontWeight:"bold"
    }
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="4000">
                        <img src={cover1} class="d-block w-100" alt="..." style={{height:"80vh",objectPosition:"top",objectFit:"cover"}}/>
                        <div class="carousel-caption d-md-block" style={{top:"45%"}}>
                            <h5 style={capStyle}>Welcome to the Adventurous World ...</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={cover3} class="d-block w-100" alt="..." style={{height:"80vh",
        objectPosition:"center",
        objectFit:"cover"}}/>
                        <div class="carousel-caption d-md-block" style={{top:"45%"}}>
                            <h5 style={capStyle}>Enjoy the Unseen Beauty Of the World...</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={cover2} class="d-block w-100" alt="..." style={slideStyle}/>
                        <div class="carousel-caption d-md-block" style={{top:"45%"}}>
                            <h5 style={capStyle}>In Luxurious and the best Hotels ...</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={cover} class="d-block w-100" alt="..." style={slideStyle}/>
                        <div class="carousel-caption d-md-block" style={{top:"45%"}}>
                            <h5 style={capStyle}>Check Our Packages and EMI plans ..</h5>
                            <p>Learn More <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"15px"}}/></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
