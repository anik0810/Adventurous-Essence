import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import plain from './CSS/IMAGE/flight.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CSS/service.css";

// import required modules
import { EffectCoverflow, Pagination,Keyboard,Navigation,Scrollbar } from "swiper";

export default function service() {
  return (
    <>
    <div className=" main-heading">
        <h3>Our Services</h3>
        <p>We are IRCTC Authorised Agency</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/10/02/928749-indian-railway-irctc.jpg" alt="Train" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Train Ticket Bookinng</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src={plain} alt="Flight" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Flight Ticket Bookinng</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hotel" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Hotel Bookinng</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tour" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Tour Packages</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://th.bing.com/th/id/R.f9e86203d0fa20b43c329f9382dcc1e4?rik=scslLl409qIDKg&riu=http%3a%2f%2fwww.travelthrive.com%2fwp-content%2fuploads%2f2015%2f07%2fvisa-passport.jpg&ehk=hfpM9H%2fO29vaQB9%2fOIJZJZimiaYuyGRZnlVl87muUww%3d&risl=&pid=ImgRaw&r=0" alt="Visa" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Visa Endorsement</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://th.bing.com/th/id/OIP.zGkFlvgp3gnpP9YKZkLKxgHaF7?pid=ImgDet&rs=1" alt="Train" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Passport and Visa Assistance</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Train" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">Car Rentals</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="service">
            <figure>
              <img src="https://www.tripsavvy.com/thmb/JwajRl5L0b4aYbYLjLMFq46jGDA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-623301456-adcb493605904cf39a79f679403cab59.jpg" alt="Train" style={{width:"100%",borderRadius:"10px 10px 0 0"}}/>
            </figure>

            <div class="service-body">
              <h5 class="service-title">EMI avalaible</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
