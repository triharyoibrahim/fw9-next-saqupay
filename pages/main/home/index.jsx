import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import { FiArrowDown, FiArrowUp, FiPlus } from "react-icons/fi";
import  Head from "next/head"

function Home() {
  return (
    <>
    <Head><title>Home</title></Head>
      <Navbar />
      <div className="P-2">-</div>
      <main>
        <Container>
          <Row>
            <Col xs={3}>
              <Menu />
            </Col>

            <Col xs={9}>
              <div className="d-flex justify-content-between zw-header mt-3">
                <div className="">
                  <p>Balance</p>
                  <h3>Rp. 120.000</h3>
                  <p>081232124323</p>
                </div>
                <div className="d-flex flex-column mt-2">
                  <Button variant="light">
                    <FiArrowUp /> Transfer
                  </Button>{" "}
                  <Button variant="light" className="mt-2">
                    <FiPlus /> Top Up
                  </Button>{" "}
                </div>
              </div>
              <Row>
                <Col xs={7}>
                  <div className="graphic mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="mt-3 mt-md-4 mx-3 mx-md-4">
                        <FiArrowDown />
                        <p className="">Income</p>
                        <p className="">Rp2.120.000</p>
                      </div>
                      <div className="mt-3 mt-md-4 mx-3 mx-md-4">
                        <FiArrowUp />
                        <p className="">Expense</p>
                        <p className="">Rp1.560.000</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                 
                    </div>
                  </div>
                </Col>

                <Col xs={5}>
                  <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 graphic mt-3">
                    <p>Transaction History</p>
                
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>

  );
}

export default Home;