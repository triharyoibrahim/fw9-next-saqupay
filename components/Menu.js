import React from "react";
import { FiGrid, FiPlus, FiArrowUp, FiLogOut, FiUser } from "react-icons/fi";
import TopUp from "../pages/topup"
import axios from "../helpers/axios"
import { useRouter } from "next/router";
import Cookies from "js-cookie";


function Menu() {
  const [modalShow, setModalShow] = React.useState(false);
  const router = useRouter();

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
  const handleDashboard = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    router.push("/transfer");
  };
  const handleProfile = (e) => {
    e.preventDefault();
    router.push("/profile");
  };

  return (
    <>
      <div className="zw-aside ps-3 ps-md-4 pt-3 pt-md-5 mt-3 ">
        <div className="flex-fill d-flex flex-column gap-1 gap-md-2">
          <div className="zwlink d-flex">
            <FiGrid />
            <p className="ms-3">

            <button className="zwlink menu_button" onClick={handleDashboard}>
              Dashboard
            </button>

            </p>
          </div>
          <div className="zwlink d-flex">
            <FiArrowUp className="" />
            <p className="ms-1 ms-md-3">

            <button className="zwlink menu_button" onClick={handleTransfer}>
              Transfer
            </button>

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

            <button className="zwlink menu_button" onClick={handleProfile}>
              Profile
            </button>

            </p>
          </div>
        </div>
        <div className="zwlink d-flex  mt-5">
          <div className="d-flex">
            <FiLogOut />
            <button className="zwlink menu_button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
