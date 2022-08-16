import React from 'react'
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import { useRouter } from "next/router";


function Profile() {
  const router = useRouter()

  const handlePersonalInfo = (e) => {
    e.preventDefault();
    router.push("/profile/personalInfo");
  };  
  const handleChangePass = (e) => {
    e.preventDefault();
    router.push("/profile/changePass");
  };
  const handleChangePin = (e) => {
    e.preventDefault();
    router.push("/profile/changePin");
  };
  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      Cookies.remove("token");
      Cookies.remove("id");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
    <Head><title>Profile</title></Head>
    <Navbar />
    <div className="P-2">-</div>
    <main>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>

          <Col xs={9} className="graphic mt-3">
          <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <div className="w-100 text-center my-3 my-md-5">
                
                <p className="my-2">
                  <FiEdit2 className="me-2" />
                  Edit
                </p>
                <p className=" mt-4">Robert Chandler</p>
                <p className="mx-5">+62 813-9387-7946</p>
              </div>
              <div className="graphic p-3 my-3 mx-auto zwlink" onClick={handlePersonalInfo}>
                
                  <div className="d-flex justify-content-between ms-3">
                    <p className=" mb-1">Personal Information</p>
                    <FiArrowRight />
                  </div>
                  
                
              </div>
              <div className="graphic d-flex-column  p-3 my-3 mx-auto zwlink" onClick={handleChangePass}>
                
                  <div className="d-flex justify-content-between ms-3">
                    <p className="mb-1">Change Password</p>
                    <FiArrowRight />
                  </div>

                
              </div>
              <div className="graphic  d-flex-column p-3 my-3 mx-auto zwlink" onClick={handleChangePin}>
                
                  <div className="d-flex justify-content-between ms-3">
                    <p className="mb-1">Change PIN</p>
                    <FiArrowRight />
                  </div>

                
              </div>
              <div className="graphic d-flex-column p-3 my-3 mb-5 mx-auto zwlink" onClick={handleLogout}>
                
                  <div className="d-flex justify-content-between ms-3">
                    <p className=" mb-1">Log Out</p>
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

export default Profile;