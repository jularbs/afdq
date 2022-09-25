import styles from "./SSOmenu.module.scss";
import useDisableBodyScroll from "hooks/useDisableScroll";
import Router from "next/router";
import { useState } from "react";

import { IoChevronBack, IoPersonCircle } from "react-icons/io5";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import { signout, isAuth } from "actions/auth";

const SSOmenu = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [dropdownActive, isDropdownActive] = useState(false);
  useDisableBodyScroll(loginModalOpen);
  useDisableBodyScroll(registrationModalOpen);

  const profileTab = () => {
    if (isAuth()) {
      return (
        <div className={styles["profile-tab"]}>
          <IoPersonCircle className={styles["icon"]} />
          <span className={styles["greeting"]}>
            Welcome, {isAuth().firstName}
          </span>
          <ul className={styles["dropdown"]}>
            {/* <li>Profile</li>
            <li>Settings</li> */}
            <li
              onClick={() => {
                signout(() => {
                  Router.reload();
                });
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className={styles["profile-tab"]}>
          <span
            className={styles["login-button"]}
            onClick={() => setLoginModalOpen(true)}
          >
            Login
          </span>
          <span
            className={styles["signup-button"]}
            onClick={() => {
              console.log("REGISTER OPEN");
              setRegistrationModalOpen(true);
            }}
          >
            Register
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles["ssomenu-container"]}>
        <div className={styles["main-nav"]}>
          <div
            className={styles["back-control"]}
            onClick={() => {
              Router.push("https://aliwanfiesta.com");
            }}
          >
            <IoChevronBack className={styles["icon"]} />
            <div>Homepage</div>
          </div>
        </div>
        <div className={styles["profile-nav"]}>{profileTab()}</div>
      </div>
      <LoginForm toggle={loginModalOpen} setToggle={setLoginModalOpen} />
      <RegistrationForm
        toggle={registrationModalOpen}
        setToggle={setRegistrationModalOpen}
      />
    </>
  );
};

export default SSOmenu;
