import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Album } from "../components/Album";
import { dataArtists } from "../utils";

import "../styles/App.css";

function Dashboard() {
  return (
    <div className="bg-gradient">
      <Container fluid className="py-4 px-3">
        <Row>
          {dataArtists.map((artist) =>
            artist.albums.map((album, index) => (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={4}
                className="mb-4 cardEffect "
              >
                <Album album={album} artist={artist.name} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
