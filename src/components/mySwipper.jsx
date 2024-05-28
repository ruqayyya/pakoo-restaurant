import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../assets/scss/components/_swipper.scss";
import { Scrollbar } from "swiper/modules";

import interyer from "../assets/images/Adsiz.png";
import interyer1 from "../assets/images/adsiz1.png";
import interyer2 from "../assets/images/adsiz2.png";
import interyer3 from "../assets/images/adsiz3.png";
import interyer4 from "../assets/images/adsiz4.png";
import interyer5 from "../assets/images/adsiz5.png";
import interyer6 from "../assets/images/adsiz6.png";
import interyer7 from "../assets/images/adsiz7.png";
import interyer8 from "../assets/images/adsiz8.png";
import interyer9 from "../assets/images/adsiz9.png";
import interyer10 from "../assets/images/adsiz10.jpg";

const MySwiper = () => {
  return (
    <Swiper
      scrollbar={{ hide: true }}
      modules={[Scrollbar]}
      className="mySwiper"
    ><div className="slider">
            <SwiperSlide>
        <img src={interyer} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={interyer10} alt="" />
      </SwiperSlide>
    </div>
      <p className="interier">INTERIOR</p>
    </Swiper>
  );
};

export default MySwiper;
