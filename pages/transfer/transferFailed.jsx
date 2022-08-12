import React from 'react'
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";


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

          <Col xs={9}>
            x
           
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </>
  )
}

export default transferFailed