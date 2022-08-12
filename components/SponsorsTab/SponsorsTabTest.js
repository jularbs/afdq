import styles from "./SponsorsTabTest.module.scss";

const SponsorsTabTest = () => {
  return (
    <div className={styles["afdq-sponsors-tab-container"]}>
      <div className={styles["header"]}>in partnership with</div>
      <div className={styles["sponsor-logo-container"]}>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/unique.jpg" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/whiterose.jpg" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/charm.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/tnt.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/palmolive.jpg" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/shopeev.png" width="70%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/alfonso.png" width="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsTabTest;
