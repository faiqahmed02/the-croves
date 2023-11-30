import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./pagesile.css";

export default function PageSiled() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        
      >
        <div className="slider_image">
          <div>
            <img
              src={require("../assets/DKSLFAKPogt7W4Dtr3ikEHT7thgkqajNvA5G6zJm.png")}
              alt=""
            ></img>
            <h4>Little Krazy</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{
          width: "290px !important",
          textAlign: "center",
        }}>
        <div className="slider_image">
          <div>
            <img
              src={require("../assets/dxso1228cWyEo9Y8hyjUIa46WVNj5a66xrHnpekJ.png")}
              alt=""
            ></img>
            <h4>
              Hawanim <br />
              Groves City
            </h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider_image">
          <div>
            <img
              src={require("../assets/E3X3DJS9gC0f5znLk9bxGE2OVo5LDR5hIy2Tms0J.png")}
              alt=""
            ></img>
            <h4>Picnic Market</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider_image">
          <div>
            <img
              src={require("../assets/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png")}
              alt=""
            ></img>
            <h4>Lucaworld</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
