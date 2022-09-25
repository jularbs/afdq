import styles from "./TopBanner.module.scss";

const TopBanner = () => {
  return (
    <div className={styles["afdq-topbar-container"]}>
      <div className={styles["announcement-container"]}>
        {/* <div className={styles["image-placeholder"]}>
          <img src="/afdq/model2022.png" alt="" height="100%" width="auto" />
        </div> */}
        <div className={styles["text-container"]}>
          <div className={styles["header"]}>
            Vote for the Netizen's Choice Award
          </div>
          <div className={styles["sub-header"]}>
            Voting is from October 8 to 29, 2022
          </div>  
        </div>
        <div className={styles["sponsor-container"]}>
          <img
            src="/afdq/sponsor/dito-rect.png"
            className={styles["img-wrapper"]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
