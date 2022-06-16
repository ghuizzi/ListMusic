import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Album } from '../components/Album';
import { dataArtists } from '../utils';

// import "../styles/App.css";
import '../styles/Dash.css';
function Favorites() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="bg-gradient">
      <Container fluid className="py-4 px-3">
        <Row className="contentCard">
          {dataArtists.map((artist) =>
            artist.albums.map((album, index) => (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={4}
                className="mb-4 cardEffect "
              >
                <Album
                  className="absolute_badge"
                  album={album}
                  artist={artist.name}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
