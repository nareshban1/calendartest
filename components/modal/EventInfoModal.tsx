import React from 'react'
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const EventInfoModal = ({show, toggle,modalHeading,modalBody}) => {
  return (
    <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EventInfoModal