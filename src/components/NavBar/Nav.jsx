/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./navBar.css";
const Nav = () => {
  return (
    <div classname="navContent">
      <Container>
        <Row>
          <Col>
            {" "}
            <a>Favorites</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
