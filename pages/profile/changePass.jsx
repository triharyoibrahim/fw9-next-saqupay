import React from 'react'
import Head from "next/head"
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiLock} from "react-icons/fi";


function changePass() {
  return (
    <>
    <Head><title>Change Password</title></Head>
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
              <p className="mb-3">Change Password</p>
              <p className="">
                You must enter your current password and then type your new
                password twice.{" "}
              </p>
              <div className="d-flex-column mx-auto mb-2">
                <Form>
                  <Form.Group className="d-flex mt-5">
                    <span className="">
                      {" "}
                      <FiLock />{" "}
                    </span>
                    <Form.Control
                      className="form-control zw-input"
                      type="password"
                      placeholder="Current Password"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex mt-5">
                    <span className="">
                      {" "}
                      <FiLock />{" "}
                    </span>
                    <Form.Control
                      className="form-control zw-input"
                      type="password"
                      placeholder="New Password"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex mt-5">
                    <span className="">
                      {" "}
                      <FiLock />{" "}
                    </span>
                    <Form.Control
                      className="form-control zw-input"
                      type="password"
                      placeholder="Retype New Password"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex justify-content-center">
                
                  <Button variant="light" size="lg" className="">
                    Change Password
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

export default changePass