import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Search from "../../components/Search";

function Layout() {
  return (
    <Container fluid>
      <Row className="h-100">
        <Search />
        <Col sm={12} className="bg-content d-flex flex-column">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
