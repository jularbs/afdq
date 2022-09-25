import styles from "./AfdqLayout.module.scss";

import Navigation from "components/Navigation/Navigation";
import SSOmenu from "components/SSOmenu/SSOmenu";

import Head from "next/head";

const AfdqLayout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <div className={styles["afdq-main-container"]}>
        <div className={styles["children"]}>
          <SSOmenu />
          <Navigation />
          {children}
        </div>

        <div className={styles["dti-details"]}>
          DTI Fair Trade Permit No. FTEB-122112 Series of 2021
        </div>
        <div
          className={styles["footer-strip"]}
        />
      </div>
    </>
  );
};

export default AfdqLayout;
