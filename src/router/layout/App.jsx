import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";
import "../../styles/App.css";
function Layout() {
  return (
    <Container fluid>
      <Nav />
      <div className="contentRow">
        <Row className="h-100 flex-row">
          <Col sm={12} className="bg-content contenApp d-flex flex-column">
            <Outlet />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Layout;
