import React from 'react'
import Head from "next/head"
import { Form, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiSearch} from "react-icons/fi";

function Transfer() {
  return (
    <>
    <Head><title>Search Receiver</title></Head>
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
              <p>Search Receiver</p>
              <Form>
                <Form.Group className="d-flex mt-4">
                  <span className=" rounded-start input-group-text zw-icon ">
                    {" "}
                    <FiSearch className="ms-2 " />{" "}
                  </span>
                  <Form.Control
                    className="rounded-end"
                    type="email"
                    placeholder="Search Receiver"
                  />
                </Form.Group>
              </Form>
              <div className=" d-flex-column  p-1 my-1">
                
                  <div className="graphic p-2 d-flex">
                 
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Robert Suhi</p>
                      <p className="">+62 813-8492-9994</p>
                    </div>
                  </div>
               
              </div>
              <div className="d-flex-column p-1 my-1">
               
                  <div className="graphic p-2 d-flex">
               
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Jessica Taro</p>
                      <p className="">+62 812-4343-6731</p>
                    </div>
                  </div>
               
              </div>
              <div className="d-flex-column  p-1 my-1">
               
                  <div className="graphic p-2 d-flex">
                  
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Sherina Keen</p>
                      <p className="">+62 811-3452-5252</p>
                    </div>
                  </div>
               
              </div>
              <div className="d-flex-column  p-1 my-1">
               
                  <div className="graphic p-2 d-flex">
                  
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Michael Le</p>
                      <p className="">+62 810-4224-4613</p>
                    </div>
                  </div>
               
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

export default Transfer