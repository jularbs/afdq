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
        <div className={styles["sticky-bottom"]}>
          <div className={styles["dti-details"]}>
            DTI Fair Trade Permit No. FTEB-145113 Series of 2022
          </div>
          <div className={styles["footer-strip"]} />
        </div>
      </div>
    </>
  );
};

export default AfdqLayout;
