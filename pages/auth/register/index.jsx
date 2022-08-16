import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import LeftSide from "../../../components/AuthLeftSide";
import Head from "next/head"
import axios from "../../../helpers/axios"

function Register() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  
  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    
    try {
      e.preventDefault();
      const result = await axios.post("/auth/register", form);
      console.log(result)
      alert("REGRISTRATION SUCCESS, PLEASE CHECK YOUR EMAIL");
      
      router.push("/auth/login");
      setIsError(false);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
    }
  };


  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };
  return (    <>
    <Head><title>Register</title></Head>
    <div className="parent-s ">
      <div>
        <LeftSide></LeftSide>
      </div>
      <div className="right-side">
          <div>
            <h4>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h4>
            <p className="pt-3">
              Transfering money is eassier than ever, you can access Saqu Pay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiUser />
              </span>
              <input
                type="text"
                className="form-control zw-input"
                placeholder="Enter your first name"
                name="firstName"
                onChange={handleChangeText}
              />
            </div>
            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiUser />
              </span>
              <input
                type="email"
                className="form-control zw-input"
                placeholder="Enter your last name"
                name="lastName"
                onChange={handleChangeText}
              />
            </div>            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiMail />
              </span>
              <input
                type="email"
                className="form-control zw-input"
                placeholder="Enter your email"
                name="email"
                onChange={handleChangeText}
              />
            </div>

            <div className="input-group flex-nowrap mt-5">
              <span className="input-group-text zw-icon">
                <FiLock />
              </span>
              <input
                type="password"
                className="form-control zw-input"
                placeholder="Enter your password"
                name="password"
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="d-grid mt-5">
            <Button variant="outline-success" size="lg" onClick={handleRegister}>
              Sign Up
            </Button>
            <p className="text-center p-5">
              Already have an account?{" "}


              <button className="zwlink menu_button" onClick={handleLogin}>
              Login
            </button>

            </p>
          </div>
        </div>

      </div>
      </>
)
}

export default Register;