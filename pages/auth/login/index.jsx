import React, {useState}from "react";
import { Button } from "react-bootstrap";
import { FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/router";
import LeftSide from "../../../components/AuthLeftSide";
import Head from "next/head"
import axios from "../../../helpers/axios"
import Cookies from "js-cookie";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    
    try {
      e.preventDefault();
      const result = await axios.post("/auth/login", form);
      console.log(result)
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);
     
        if (result.data.data.pin === null) {
          router.push("/auth/pin");
        } else {
          router.push("/main/home");
        }
      setIsError(false);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    router.push("/auth/reset");
  };
  const handleRegis = (e) => {
    e.preventDefault();
    router.push("/auth/register");
  };
  return (
    <>
    <Head><title>Login</title></Head>
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
                <FiMail />
              </span>
              <input
                type="email"
                className="form-control zw-input"
                name="email"
                placeholder="Enter your email"
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
        name="password"
        placeholder="Enter your password"
        onChange={handleChangeText}
      />
             </div>
             <div className="text-end mt-3 ">

             <button className="zwlink menu_button" onClick={handleReset}>
              Forgot Password
            </button>

             </div>
           </div>
           <div className="d-grid mt-5">
             <Button variant="outline-success" size="lg" onClick={handleLogin}>
               Login
             </Button>
             <p className="text-center p-5">
               Don't have an account?
               <button className="zwlink menu_button" onClick={handleRegis}>
               Sign Up
            </button>

           </p>
         </div>
       </div>
     </div>
   </>
 );
}

export default Login;