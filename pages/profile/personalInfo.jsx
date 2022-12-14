import React, { useState, useEffect } from "react";
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "../../helpers/axios";

function personalInfo() {
  const router = useRouter()
  const [data, setData] =  useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const user = Cookies.get('id');
      const result = await axios.get(`user/profile/${user}`);
      setData(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


  const handleManagePhone = (e) => {
    e.preventDefault();
    router.push("/profile/managePhone");
  };  

  return (
    <>
    <Head><title>Personal Information</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9}>
          <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <p className="p-3 mb-3">Personal Info</p>
              <p className="p-3 mb-3">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">First Name</p>
                      <p className="">{data.firstName}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">Last Name</p>
                      <p className="">{data.lastName}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className="">Verified E-mail</p>
                      <p className="">{data.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className="mb-2">Phone Number</p>
                      <p className="">{data.noTelp}</p>
                    </div>
                  </div>
                 
                    <p className="p-3 zwlink" onClick={handleManagePhone}>Manage</p>
                 
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

export default personalInfo