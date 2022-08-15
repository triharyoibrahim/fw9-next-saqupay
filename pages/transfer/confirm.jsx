import React from 'react'
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import PinConfirm from "../../components/PinConfirm";


function Confirm() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Head><title>Transfer Confirmation</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9} className="graphic">
          <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <p>Details</p>
              <div className="graphic d-flex-column p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1 ">Amount</p>
                      <p className="">Rp100.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Balance Left</p>
                      <p className="">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column  p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Date Time</p>
                      <p className="">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-1 my-2">
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
                <div className="d-flex-column  p-1 my-2">
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
              <div className="d-md-flex justify-content-end p-3">
                <Button variant="success" onClick={() => setModalShow(true)}>
                  Continue
                </Button>
                <PinConfirm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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

export default Confirm