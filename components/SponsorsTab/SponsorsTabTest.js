import styles from "./SponsorsTabTest.module.scss";

const SponsorsTabTest = () => {
  return (
    <div className={styles["afdq-sponsors-tab-container"]}>
      <div className={styles["header"]}>in partnership with</div>
      <img src="/afdq/sponsors1line.png" className={styles.sponsorWrapper} />
    </div>
  );
};

export default SponsorsTabTest;
