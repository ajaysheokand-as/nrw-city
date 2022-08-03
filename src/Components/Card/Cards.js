import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Classes from "./Card.module.css";
import { FlipCard } from "./FlipCard";
import { FlipCard2 } from "./FlipCard2";
import img1 from "./img/pr.jpeg";

export const Cards = (props) => {
  console.log(props.data);
  return (
    <div className={Classes.card}>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {props.data
            ? props.data.map((d, i) => (
                <Col>
                  <FlipCard
                    business_title={d.business_title}
                    tag_line={d.tag_line}
                  />
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
              ))
            : "Loading..."}
        </Row>
      </Container>
    </div>
  );
};
