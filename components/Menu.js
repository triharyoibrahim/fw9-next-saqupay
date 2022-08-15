import React from "react";
import { FiGrid, FiPlus, FiArrowUp, FiLogOut, FiUser } from "react-icons/fi";
import TopUp from "../pages/topup"
import { Button } from "react-bootstrap";

function Menu() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="zw-aside ps-3 ps-md-4 pt-3 pt-md-5 mt-3">
        <div className="flex-fill d-flex flex-column gap-1 gap-md-2">
          <div className="zwlink d-flex">
            <FiGrid />
            <p class="ms-3">

                Dashboard

            </p>
          </div>
          <div className="zwlink d-flex">
            <FiArrowUp className="" />
            <p class="ms-1 ms-md-3">

                Transfer

            </p>
          </div>
          <div className="zwlink d-flex">
            <FiPlus />
            <p className="ms-1 ms-md-3" onClick={() => setModalShow(true)}>

                Top Up

            </p>
                <TopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
          </div>
          <div className="zwlink  d-flex mb-5">
            <FiUser />
            <p className="ms-1 ms-md-3">

                Profile

            </p>
          </div>
        </div>
        <div className="zwlink d-flex  mt-5">
          <div className="d-flex">
            <FiLogOut />
            <p className="ms-1 ms-md-3">

                Logout

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
