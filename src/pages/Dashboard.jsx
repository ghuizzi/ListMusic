import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dataSongs from "../dataSongs";
import mc from "../image/mc.jpg";
import "../Styles/Dash.css";
import "../Styles/App.css";
function Dashboard() {
  return (
    <div className="bg-gradient">
      <Container fluid className="py-4 px-3">
        <Row>
          <Col>
            <div className="songsContent">
              <div className="SongsCard">
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={mc}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>Artist: {Songs.name}</p>
                      <p>Song name{Songs.Album}</p>
                      <p> Date:{Songs.Date}</p>
                    </div>
                  </div>
                </div>
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={Songs.pic}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>Artist:{Songs.name}</p>
                      <p>Song name{Songs.Album}</p>
                      <p>Album{Songs.Date}</p>
                    </div>
                  </div>
                </div>
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={mc}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>Artist{Songs.name}</p>
                      <p>Song name{Songs.Album}</p>
                      <p>Album{Songs.Date}</p>
                    </div>
                  </div>
                </div>
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={mc}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>{Songs.name}</p>
                      <p>{Songs.Album}</p>
                      <p>{Songs.Date}</p>
                    </div>
                  </div>
                </div>
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={mc}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>{Songs.name}</p>
                      <p>{Songs.Album}</p>
                      <p>{Songs.Date}</p>
                    </div>
                  </div>
                </div>
                <div className="cardEffect">
                  <div className="card">
                    <img
                      className="img-fluid rounded float-start"
                      src={mc}
                      alt="album"
                    />
                    <div className="cardDescription">
                      <p>{Songs.name}</p>
                      <p>{Songs.Album}</p>
                      <p>{Songs.Date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
