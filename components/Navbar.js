import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";
import { FiBell } from "react-icons/fi";
import axios from "../helpers/axios";


function Navbar() {
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
  const handleHome = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };
  return (
    <>
      <nav className="zw-nav d-flex justify-content-between mw-100 row">
        <div className="col-12 col-md-7">
          <div className="mx-md-5 px-5 mx-0">
            <span className="spanzwallet" onClick={handleHome}>Saqu Pay</span>
          </div>
        </div>
        <div className="col-12 mx-3 mx-md-0 col-md-5">
          <div className="d-flex justify-content-md-end justify-content-between align-items-center px-2 px-md-3 mx-2 mx-md-3">
          {/* <Image
                      src="/robert.png"
                      width={50}
                      height={50}
                      className=""
                    /> */}
          <Image src={data.image ? process.env.URL_CLOUDINARY + data.image : "/photoProfile.jpg"} alt="photoProfile" width={70} height={70} className="navbar__image" />
            <div className="d-flex-column justify-content-center mx-3">
              <p className="name-zw-nav">{`${data.firstName} ${data.lastName}`}
                {/* {data.map((item) => (
        <div key={item.id}>
          <h5>{item.firstName}</h5>
        </div>
      ))} */}
      </p>
              <p className="number-zw-nav">{data.noTelp}</p>
            </div>
            <FiBell />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
