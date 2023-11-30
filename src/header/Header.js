import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <Container>
      <Row style={{ position: "relative" }}>
        <Col>
          <Row className="header">
            <Col>
              <Image src={require("../assets/logo.png")} />
            </Col>
            <Col>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <i
                        class="fa-brands fa-tiktok"
                        style={{ color: "white" }}
                      ></i>
                    </Col>
                    <Col>
                      <i
                        class="fa-brands fa-instagram"
                        style={{ color: "white" }}
                      ></i>
                    </Col>
                    <Col>
                      <i
                        class="fa-brands fa-twitter"
                        style={{ color: "white" }}
                      ></i>
                    </Col>
                    <Col>
                      <i
                        class="fa-brands fa-snapchat"
                        style={{ color: "white" }}
                      ></i>
                    </Col>
                  </Row>
                </Col>
                <Col
                  className="m-auto"
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  {/* Button */}
                  <button className="header-btn m-auto">Login</button>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <i class="fa-brands fa-tiktok"></i>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
