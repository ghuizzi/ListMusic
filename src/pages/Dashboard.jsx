import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container fluid className="py-4 px-3">
      <Row>
        <Col>
          <p>Contenido de la pagina Dashboard</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
