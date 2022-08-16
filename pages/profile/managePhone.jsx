import React from 'react'
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiTrash} from "react-icons/fi";
import { useRouter } from "next/router";

function managePhone() {
  const router = useRouter()

  const handleAddPhone = (e) => {
    e.preventDefault();
    router.push("/profile/addPhone");
  };
  return (
    <>
    <Head><title>Manage Phone Number</title></Head>
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
              <p className="mb-3 p-3">Manage Phone Number</p>
              <p className="px-3">
                You can only delete the phone number and then you must add
                another phone number.
              </p>
              <div className="d-flex-column  p-3 my-3">
                <div className="graphic p-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">Phone Number</p>
                      <p className="">+62 813-9387-7946</p>
                    </div>
                  </div>

                    <FiTrash className="zwlink" onClick={handleAddPhone}/>

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

export default managePhone