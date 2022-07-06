import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Classes from "./Card.module.css";
import { FlipCard } from "./FlipCard";
import { FlipCard2 } from "./FlipCard2";
import img1 from "./img/pr.jpeg";

export const Cards = () => {
  return (
    <div className={Classes.card}>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <FlipCard />
              {/* <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card> */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
