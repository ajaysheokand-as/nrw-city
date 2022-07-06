import React from "react";
import Classes from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className={Classes.footer}>
      <Container>
        <Row>
          <Col>
            <h4>About Us </h4>
            <p>
              School is established, owned and administered by the (Name of
              society), registered charitable society and was established in the
              year 1998.
            </p>
          </Col>

          <Col>
            <h4>Contact Us </h4>
            <p>
              Narwana Rural, Haryana, <br />
              Pin Code - 126116
              <br />
              <br />
              Phone: +91 123 424 5678
              <br />
              Email: sschoolnarwana@gmail.com
            </p>
          </Col>

          <Col>
            <h4>Quick Links </h4>
            Gallery <br />
            Terms and Conditions <br />
            About Us <br />
            Contact Us <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
