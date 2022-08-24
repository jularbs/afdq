import styles from "./Navigation.module.scss";
import Link from "next/link";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { useState } from "react";

import useDisableBodyScroll from "hooks/useDisableScroll";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  useDisableBodyScroll(isActive);
  return (
    <div className={styles["afdq-navigation"]}>
      <Link href="/">
        <div className={styles["logo-container"]}>
          <img src="/afdq/afdqlogo.png" height="60px" alt="" />
        </div>
      </Link>

      <div
        className={`${styles["main-nav"]} ${isActive ? styles["active"] : ""}`}
      >
        <div
          className={styles["back-nav"]}
          onClick={() => {
            setIsActive(false);
          }}
        >
          <IoCloseSharp />
        </div>
        <a
          className={styles["nav-item"]}
          href="/#candidates"
          onClick={() => {
            setIsActive(false);
          }}
        >
          candidates
        </a>
        <div className="vl"></div>
        <a
          className={styles["nav-item"]}
          href="/#about"
          onClick={() => {
            setIsActive(false);
          }}
        >
          about
        </a>
        <div className={styles["vl"]}></div>
        <a
          className={styles["nav-item"]}
          href="/#how-to-vote"
          onClick={() => {
            setIsActive(false);
          }}
        >
          how to vote
        </a>
        <div className={styles["vl"]}></div>
        <a
          className={styles["nav-item"]}
          href="/#faqs"
          onClick={() => {
            setIsActive(false);
          }}
        >
          faqs
        </a>
        {/* <div className="vl"></div>
        <div className="nav-item">contact</div> */}
      </div>

      <div
        className={styles["hamburger-icon"]}
        onClick={() => {
          setIsActive(true);
        }}
      >
        <IoMenuSharp />
      </div>
    </div>
  );
};

export default Navigation;
