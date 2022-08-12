import styles from "./TopBanner.module.scss";

const TopBanner = () => {
  return (
    <div className={styles["afdq-topbar-container"]}>
      <div className={styles["announcement-container"]}>
        <div className={styles["image-placeholder"]}>
          <img src="/afdq/model.png" alt="" height="100%" width="auto" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["header"]}>
            <span> Vote for the </span> NETIZENS' CHOICE AWARD
          </div>
          <div className={styles["sub-header"]}>
            Voting is from <span>September 11 - October 3, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
