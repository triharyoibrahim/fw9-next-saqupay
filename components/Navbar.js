import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { FiBell } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <nav className="zw-nav d-flex justify-content-between mw-100 row">
        <div className="col-12 col-md-7">
          <div className="mx-md-5 px-5 mx-0">
            <span className="spanzwallet">Saqu Pay</span>
          </div>
        </div>
        <div className="col-12 mx-3 mx-md-0 col-md-5">
          <div className="d-flex justify-content-md-end justify-content-between align-items-center px-2 px-md-3 mx-2 mx-md-3">
            {/* <img src={robert} className="zw-img img-fluid" alt="photoprofile" /> */}
            <div className="d-flex-column justify-content-center mx-3">
              <p className="name-zw-nav">Robert Chandler</p>
              <p className="number-zw-nav">+62 8139 3877 7946</p>
            </div>
            <FiBell />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
