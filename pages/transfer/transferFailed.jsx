import React from 'react'
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { BsFillXCircleFill } from "react-icons/bs";


function transferFailed() {
  return (
    <>
    <Head><title>Transfer Failed</title></Head>
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
              <div className="w-100 text-center my-5">
                <BsFillXCircleFill size={50} style={{ color: "red" }} />
                <p className="my-5">Transfer Failed</p>
                <p>
                  We can’t transfer your money at the moment, we recommend you
                  to check your internet connection and try again.
                </p>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1 ">Amount</p>
                      <p className="">Rp100.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Balance Left</p>
                      <p className="">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column  p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Date Time</p>
                      <p className="">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Notes</p>
                      <p className="">For buying some socks</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="">Transfer to</p>
              <div className="graphic">
                <div className="d-flex-column  p-3 my-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">

                      <div className="d-flex-column justify-content-center ms-3">
                        <p className="">Robert</p>
                        <p className="">+62 813-8492-9994</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-end">
                
                  <Button
                    variant="success"
                    className=" my-2 my-md-5"
                    type="submit"
                  >
                    Try Again
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

export default transferFailed