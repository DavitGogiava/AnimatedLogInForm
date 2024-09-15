import React, { useEffect, useState, useContext } from "react";
import "./AuthPage.css";

import L1 from "../../Assets/Images/Leaves/1.webp";
import L3 from "../../Assets/Images/Leaves/3.webp";
import L4 from "../../Assets/Images/Leaves/4.webp";
import L5 from "../../Assets/Images/Leaves/5.webp";
import L7 from "../../Assets/Images/Leaves/7.webp";
import L2Dark from "../../Assets/Images/Leaves/2Dark.webp";
import L3Dark from "../../Assets/Images/Leaves/3Dark.webp";
import L5Dark from "../../Assets/Images/Leaves/5Dark.webp";
import L6Dark from "../../Assets/Images/Leaves/6Dark.webp";

import { motion } from "framer-motion";

import {DeviceContext} from "../../Contexts/DeviceContext"

const AuthPage = () => {
  const isMobile = useContext(DeviceContext);

  const [isActive, setIsActive] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 2900);

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  const handleFormSwap = () => {
    setIsLoginActive((prev) => !prev);
  };
  
  const handleRefresh = () => {
    setIsActive(true)
    console.log(isActive)
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <motion.div
          className="auth-inside"
          initial={{ width: "0", height: "0", opacity: 0 }}
          animate={{
            width: "80%",
            height: "90%",
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {!isMobile ? (
            <>
              <motion.div
                className="left"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <div className="title">Register</div>

                <form className="registration-form" noValidate>
                  <div className="inputBox">
                    <input type="text" required="true" name="firstname" autocomplete="off"/>
                    <span>First name</span>
                  </div>

                  <div className="inputBox">
                    <input type="text" required="true" name="lastname" autocomplete="off"/>
                    <span>Last name</span>
                  </div>

                  <div className="inputBox">
                    <input type="text" required="true" name="email" autocomplete="off"/>
                    <span>Email</span>
                  </div>

                  <div className="inputBox">
                    <input type="password" required="true" name="password" autocomplete="off"/>
                    <span>Password</span>
                  </div>

                  <button type="submit">Register</button>
                </form>
              </motion.div>

              <div className="vertical-line"></div>

              <motion.div
                className="right"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <div className="title">Log In</div>

                <form className="login-form" noValidate>
                  <div className="inputBox">
                    <input type="text" required="true" name="email" autocomplete="off"/>
                    <span>Email</span>
                  </div>

                  <div className="inputBox">
                    <input type="password" required="true" name="password" autocomplete="off"/>
                    <span>Password</span>
                  </div>

                  <button onSubmit={handleRefresh}>Log In</button>
                </form>
              </motion.div>
            </>
          ) : (
            <>
              {isLoginActive ? (
                <motion.div
                  className="left"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div className="title">Register</div>

                  <div className="select-type" onClick={handleFormSwap}>
                    or Log in
                  </div>

                  <form
                    className="registration-form"
                    noValidate
                  >
                    <div className="inputBox">
                      <input type="text" required="true" name="firstname" autocomplete="off"/>
                      <span>First Name</span>
                    </div>

                    <div className="inputBox">
                      <input type="text" required="true" name="lastname" autocomplete="off"/>
                      <span>Last Name</span>
                    </div>

                    <div className="inputBox">
                      <input type="text" required="true" name="email" autocomplete="off"/>
                      <span>Email</span>
                    </div>

                    <div className="inputBox">
                      <input type="password" required="true" name="password" autocomplete="off"/>
                      <span>Password</span>
                    </div>

                    <button type="submit">Register</button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  className="right"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div className="title">Log in</div>

                  <div className="select-type" onClick={handleFormSwap}>
                    Or Register
                  </div>

                  <form
                    className="login-form"
                    noValidate
                  >
                    <div className="inputBox">
                      <input type="text" required="true" name="email" autocomplete="off"/>
                      <span>Email</span>
                    </div>

                    <div className="inputBox">
                      <input type="password" required="true" name="password" autocomplete="off"/>
                      <span>Password</span>
                    </div>

                    <button type="submit">Log in</button>
                  </form>
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        <div className={`bud-leaf center ${isActive ? "active" : ""}`}>
          <img src={L5Dark} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf left bottom ${isActive ? "active" : ""}`}>
          <img src={L1} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf right bottom ${isActive ? "active" : ""}`}>
          <img src={L1} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf down left ${isActive ? "active" : ""}`}>
          <img src={L7} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf down right ${isActive ? "active" : ""}`}>
          <img src={L7} alt="" draggable="false" />
        </div>

        <div
          className={`bud-leaf right middle big ${isActive ? "active" : ""}`}
        >
          <img src={L6Dark} alt="" draggable="false" />
        </div>

        <div
          className={`bud-leaf right middle small ${isActive ? "active" : ""}`}
        >
          <img src={L3} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf left middle big ${isActive ? "active" : ""}`}>
          <img src={L6Dark} alt="" draggable="false" />
        </div>

        <div
          className={`bud-leaf left middle small ${isActive ? "active" : ""}`}
        >
          <img src={L5} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf corner left ${isActive ? "active" : ""}`}>
          <img src={L2Dark} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf corner right ${isActive ? "active" : ""}`}>
          <img src={L3Dark} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf central left ${isActive ? "active" : ""}`}>
          <img src={L4} alt="" draggable="false" />
        </div>

        <div className={`bud-leaf central right ${isActive ? "active" : ""}`}>
          <img src={L4} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
