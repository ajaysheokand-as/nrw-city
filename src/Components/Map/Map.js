import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

export const Map = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.22847508888!2d75.68549844955616!3d29.156172785930757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1658147558497!5m2!1sen!2sin"
              width="100%"
              height="600px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
