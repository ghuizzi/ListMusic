import React from "react";
import { Modal, Button } from "react-bootstrap";

// pack icons
import { AiTwotoneStar } from "react-icons/ai";

// import "./styles.css ";
// import styles from './styles.css'

export function ListMusicModal({ show, onHide, artist, album, music }) {
  return (
    <div>
      <Modal
        style={{
          alignIitems: "center",
          justifyContent: "center",
          display: " flex",
        }}
        classname="modal"
        show={show}
        onHide={onHide}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{artist}</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{ overflowY: "scroll", height: "15rem" }}
          classname="modalbd"
        >
          <h4>{album}</h4>
          {music != null &&
            music.map((music, index) => (
              <div style={{ padding: "10px" }} key={index}>
                <p style={{ display: "inline" }} classname="number ">
                  {index + 1}
                </p>
                <p
                  style={{ display: "inline", padding: "10px" }}
                  classname="nameSong"
                >
                  {music.name}
                </p>
                {/* use icon */}
                <AiTwotoneStar color="#e323a6" />
              </div>
            ))}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
