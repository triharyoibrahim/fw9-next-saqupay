import React from 'react'
import { Button } from "react-bootstrap";
import { FiMail, FiLock } from "react-icons/fi";
import LeftSide from "../../../components/AuthLeftSide";
import Head from "next/head"

function Reset() {
  return (
    <>
    <Head><title>Reset Password</title></Head>
<div className="parent-s ">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="right-side">
          <div>
            <h4>
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </h4>
            <p className="pt-3">
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </p>
            <div className="input-group flex-nowrap  mt-5 ">
              <span className="input-group-text zw-icon ">
                <FiMail />
              </span>
              <input
                type="email"
                className="form-control zw-input "
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="d-grid p-5">
            <Button variant="outline-success" size="lg">
              Confirm
            </Button>
          </div>
        </div>
</div>
    </>
  );
}
export default Reset;