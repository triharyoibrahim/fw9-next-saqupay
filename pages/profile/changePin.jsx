import React from 'react'
import Head from "next/head"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";


function changePin() {
  return (
    <>
    <Head><title>Change Pin</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9} className="d-flex flex-column mt-3 mb-3 graphic">
          <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <p>Change Pin</p>
              <p className="">
                Enter your current 6 digits Saqu Pay PIN below to continue to
                the next steps.
              </p>
              <div className="d-flex-column mx-auto ">
                <Form className="d-flex flex-rows justify-content-center  mw-100 gap-2 pt-0 pt-md-5 mt-5">
                  <div className="d-flex ">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                  <div className="d-flex ">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                  <div className="d-flex ">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className="pin_input m-2"
                      type="number"
                    />
                  </div>
                </Form>
              </div>
              <div className="text-center  my-5">
   
                  <Button variant="success" className="">
                    Continue
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

export default changePin