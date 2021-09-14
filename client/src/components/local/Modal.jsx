import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";

const ModalBtn = ({show, setShow}) => {
  const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={show} onHide={handleClose}>

        <Modal.Body className='text-center p-5'>Thanks Local Guide</Modal.Body>
      </Modal>
    </>
  );
}
 export default ModalBtn;