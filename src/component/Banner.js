import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import "./banner.css";
import Button from "./Button";

function Banner() {
  return (
    <Carousel controls={false}>
      <Carousel.Item className="banner-item">
        <div className="banner-item-content">
          <div>
            <h6>KHAWAJA YANNI</h6>
            <h1>The New era of luxury</h1>
            <p>Lorem Ipsum</p>
            <Button text="Book reservation now" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="banner-item">
        <div className="banner-item-content">
          <div>
            <h6>KHAWAJA YANNI</h6>
            <h1>The New era of luxury</h1>
            <p>Lorem Ipsum</p>
            <Button text="Book reservation now" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
