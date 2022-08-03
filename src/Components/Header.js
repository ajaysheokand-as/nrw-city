import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CreateCard } from "./Card/CreateCard";
import { Login } from "./Login/Login";
import { Home } from "./Home";
import { ContactUs } from "./ContactUs/ContactUs";
import { useState } from "react";
import { Map } from "./Map/Map";
// import jsonData from "../data/data.json";

export default function Header(props) {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  // const [allData, setAllData] = useState({});

  // console.log(jsonData.all_cards);

  // useEffect(() => {
  //   setAllData(jsonData.all_cards);
  // }, []);

  // console.log(allData);
  return (
    <Router>
      {
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Cloud City</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/Home">
                    Home
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/Home">
                    Gallery
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/Map">
                    Map
                  </Nav.Link>
                  {isAdmin ? (
                    <>
                      <Nav.Link as={Link} to="/CreateCard">
                        Create Card
                      </Nav.Link>
                      {/* <Nav.Link as={Link} to="/R_Card">
                        Modify
                      </Nav.Link> */}
                    </>
                  ) : null}
                  {/* <Nav.Link as={Link} to="/About">
                    About Us
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/Contact">
                    Contact Us
                  </Nav.Link>
                  {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
                </Nav>
                {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
                {isLogin ? (
                  <Nav.Link as={Link} to="/Login">
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/Login">
                    Sign In
                  </Nav.Link>
                )}
                {isAdmin ? (
                  <Nav.Link as={Link} to="/CreateCard">
                    Register
                  </Nav.Link>
                ) : null}
              </Navbar.Collapse>
            </Container>
          </Navbar>{" "}
          <Routes>
            <Route path="/" element={<Home />} exect />
            <Route path="/Home" element={<Home />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/CreateCard" element={<CreateCard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<ContactUs />} />
          </Routes>
        </div>
      }
    </Router>
  );
}
