import React from "react";
import { Modal, Button } from "react-bootstrap";

// pack icons
import { AiTwotoneStar } from "react-icons/ai";

import "./stylesModal.css";

export function ListMusicModal({ show, onHide, artist, album, music }) {
  return (
    <div>
      <Modal
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

        <Modal.Body classname="modalbd">
          <h4>{album}</h4>
          {music != null &&
            music.map((music, index) => (
              <div key={index}>
                <p classname="number ">{index + 1}</p>
                <p classname="nameSong">{music.name}</p>
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
