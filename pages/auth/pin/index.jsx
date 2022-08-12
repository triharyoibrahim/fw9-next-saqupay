import React from "react";
import { Button } from "react-bootstrap";
import LeftSide from "../../../components/AuthLeftSide";
import Head from "next/head"

function Pin() {
  return (
  <>
  <Head><title>Create Pin</title></Head>
    <div className="parent-s ">
      <div>
        <LeftSide></LeftSide>
      </div>
      <div className="right-side">
          <div>
            <h4>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h4>
            <p className="pt-3">
              Create 6 digits pin to secure all your money and your data in Saqu
              Pay app. Keep it secret and don’t tell anyone about your Saqu Pay
              account password and the PIN.
            </p>
            <div className="d-flex mt-3 mb-3">
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
              <div className="m-3">
                <span className=""></span>
                <input type="text" className="pin_input" />
              </div>
            </div>
          </div>
          <div className="d-grid mt-3">
            <Button variant="outline-success" size="lg">
              Confirm
            </Button>
          </div>
        </div>
    </div>
      </>
  )
}

export default Pin;