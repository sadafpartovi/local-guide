import { Modal, Button, Image } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import mainContext from "../../context/mainContext";

const ModalBtn = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const { city, title, type, description, img } = useContext(mainContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="text-center p-5 thanksLocal">
          Thanks! Local Guide
        </Modal.Title>
        <img src={img} className="rounded modalImg fluid thumbnail m-auto" alt='the location'/>
        <Modal.Body className="text-center p-5">
          {title} in {city}
        </Modal.Body>

      </Modal>
    </>
  );
};
export default ModalBtn;
