import styles from "./SponsorsTab.module.scss";

const SponsorsTab = () => {
  return (
    <div className={styles["afdq-sponsorstab"]}>
      <div className={styles["header"]}>in partnership with</div>
      <div className={styles["sponsors-container"]}>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/shopeev.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/palmolive.jpg" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/tnt.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/alfonso.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/charm.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/whiterose.png" width="100%" alt="" />
        </div>
        <div className={styles["item"]}>
          <img src="/afdq/adunits/unique.png" width="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsTab;
