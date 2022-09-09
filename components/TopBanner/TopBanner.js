import styles from "./TopBanner.module.scss";

const TopBanner = () => {
  return (
    <div className={styles["afdq-topbar-container"]}>
      <div className={styles["announcement-container"]}>
        <div className={styles["image-placeholder"]}>
          <img src="/afdq/model2022.png" alt="" height="100%" width="auto" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["header"]}>
            Vote for the <strong>Netizen's Choice Award</strong>
          </div>
          <div className={styles["sub-header"]}>
            Voting is from September 24 - October 17, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
