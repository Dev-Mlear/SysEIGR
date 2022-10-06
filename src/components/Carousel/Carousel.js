import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const Carousel = (props) => {
  return (
    <div className="container">
      <h6>Trusted by our beloved clients</h6>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://google.com" target="_blank">
            <img className="google" src="Assets/svg/partners/Google.svg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://amazon.com" target="_blank">
            <img src="Assets/svg/partners/Amazon.svg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://paypal.com" target="_blank">
            <img src="Assets/svg/partners/PayPal.svg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ebay.com" target="_blank">
            <img src="Assets/svg/partners/eBay.svg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://airbnb.com" target="_blank">
            <img src="Assets/svg/partners/Airbnb.svg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://netflix.com" target="_blank">
            <img src="Assets/svg/partners/Netflix.svg" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
