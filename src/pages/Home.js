import React from "react";
import Banner from "../component/Banner";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import "./home.css";
import Button from "../component/Button";
import PageSiled from "../component/PageSiled";
import Header from "../header/Header";

function Home() {
  return (
    <>
      <Header />
      <Container fluid className="g-0">
        <Row className="p-0 g-0 banner">
          <Col>
            <Banner />
          </Col>
          <Col></Col>
        </Row>
        <Row className="g-0 home-second">
          <Col>
            <div>
              <h2>Mall Of: Endless Possibilities</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <Image
                src={window.location.href + "/assets/video_poster.png"}
              />
            </div>
            <Row className="home-second-inner">
              <Col style={{ margin: "auto" }} sm={12} md={6} lg={7}>
                <p>25 SR/GUEST</p>
                <h3>Get your General Access Ticket</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac suscipit leo. Ut volutpat nulla at turpis tempor, sed
                  varius metus lobortis. Curabitur non dictum ipsum. Sed
                  consequat mauris sit amet libero suscipit, vitae maximus neque
                  finibus.
                </p>
              </Col>
              <Col style={{ margin: "auto", textAlign: "right" }}>
                <i class="fa-solid fa-arrow-right" style={{ fontSize: 30 }}></i>
              </Col>
            </Row>
          </Col>
          <Row className="section-three">
            <Col>
              <h3>
                Book General Access ticket and enjoy the attractions for free
              </h3>
              <Button text="Book General Access Ticket" />
            </Col>
          </Row>
          <PageSiled />
        </Row>
      </Container>
    </>
  );
}

export default Home;
