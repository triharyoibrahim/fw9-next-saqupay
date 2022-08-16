import React from 'react'
import Head from "next/head"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiEdit2} from "react-icons/fi";
import { useRouter } from "next/router";

function transferInput() {
  const router = useRouter()

  const handleConfirm = (e) => {
    e.preventDefault();
    router.push("/transfer/confirm");
  };
  return (
    <>
    <Head><title>Input Amount</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9} className="d-flex flex-column mt-3 graphic">
          <div className=" d-flex-column px-3 px-md-4 pt-3 pt-md-4 ">
              <p className="">Transfer money</p>
              <div className="d-flex-column p-3 my-3">
                <div className="graphic d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex">
                  
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Robert Suhi</p>
                      <p className="">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pt-3">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
              <Form>
                <Form.Group>
                  <div className="w-100 ">
                    <Form.Control
                      type="number"
                      className="form-control zw-input text-center"
                      placeholder="0.00"
                    />
                    <p className="">Rp120.000 Available</p>
                  </div>
                </Form.Group>
                <Form.Group className="d-flex w-50 m-auto my-3 my-md-5">
                  <span className="zwicon">
                    <FiEdit2 />
                  </span>
                  <Form.Control
                    type="text"
                    className="form-control zw-input text-center "
                    placeholder="Add some notes"
                  />
                </Form.Group>
                <div className="d-md-flex justify-content-end">
                  
                    <Button
                      variant="success"
                      className="w-100 my-5"
                      type="submit"
                      onClick={handleConfirm}
                    >
                      Continue
                    </Button>
                  
                </div>
              </Form>
            </div>
           
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </>
  )
}

export default transferInput