import styles from "./AfdqLayout.module.scss";

import Navigation from "components/Navigation/Navigation";
import SSOmenu from "components/SSOmenu/SSOmenu";

import Head from "next/head";

const AfdqLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/afdq/fonts/RALEWAY-REGULAR.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/afdq/fonts/RALEWAY-LIGHT.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/afdq/fonts/RALEWAY-MEDIUM.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/afdq/fonts/JuliettaMessie.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/afdq/fonts/GALANOGROTESQUESEMIBOLD.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/afdq/fonts/GALANOGROTESQUELIGHT.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles["afdq-main-container"]}>
        <img src="/afdq/weave-min.png" className={styles["weave"]} alt="" />

        <div className={styles["children"]}>
          <SSOmenu />
          <Navigation />
          {children}
        </div>

        <div className={styles["dti-details"]}>
          DTI Fair Trade Permit No. FTEB-122112 Series of 2021
        </div>
      </div>
    </>
  );
};

export default AfdqLayout;
