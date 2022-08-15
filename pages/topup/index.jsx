import React from "react";
import { Button, Modal, Form } from "react-bootstrap";


function Topup(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="blue">
          <Modal.Title id="contained-modal-title-vcenter">
            Top Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter the amount of money, and click submit
          </p>
          <Form className="">
            <div className="">
              <Form.Control
                maxlength="1"
                min="0"
                max="9"
                className=""
                type="number"
              />
            </div>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>

            <Button variant="success" className="" onClick={props.onHide}>
              Submit
            </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Topup;
