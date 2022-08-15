import React from 'react'
import Head from "next/head"
import {Button, Form, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiPhone} from "react-icons/fi";


function addPhone() {
  return (
    <>
    <Head><title>Add Phone Number</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9}>
          <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4 mt-3">
              <p className="mb-3">Add Phone Number</p>
              <p className="">
                Add at least one phone number for the transfer ID so you can
                start transfering your money to another user..
              </p>
              <div className="d-flex-column mx-auto mb-2">
                <Form>
                  <Form.Group className="d-flex mt-5">
                    <span className="">
                      {" "}
                      <FiPhone />{" "}
                  </span> 
                    <Form.Control
                      className="form-control zw-input"
                      type="text"
                      placeholder="Type Your Number"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex justify-content-center zwlink">

                  <Button variant="light" size="lg" className="">
                    Add Number
                  </Button>

              </div>
            </div>

           
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </>
  )
}

export default addPhone