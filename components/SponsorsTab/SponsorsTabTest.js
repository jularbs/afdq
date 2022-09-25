import styles from "./SponsorsTabTest.module.scss";

const SponsorsTabTest = () => {
  return (
    <div className={styles["afdq-sponsors-tab-container"]}>
      <div className={styles["header"]}>in partnership with</div>
      <div className={styles["sponsor-logo-container"]}>
        <div className={styles["item"]}>
          <img src="/afdq/sponsor/unique-ad.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/sponsor/whiterose-ad.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/sponsor/charm-ad.png" width="100%" alt="" />
        </div>
        <div className={`${styles["item"]} ${styles["hz"]}`}>
          <img src="/afdq/sponsor/birch-ad.png" width="100%" alt="" />
        </div>
        <div className={`${styles["item"]} ${styles["hz"]}`}>
          <img src="/afdq/sponsor/tanduay-ad.png" width="100%" alt="" />
        </div>
        <div className={`${styles["item"]} ${styles["hz"]}`}>
          <img src="/afdq/sponsor/palmo-ad.jpg" width="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsTabTest;
