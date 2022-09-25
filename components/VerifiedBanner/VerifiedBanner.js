import styles from "./VerifiedBanner.module.scss";

import useDisableBodyScroll from "hooks/useDisableScroll";
import { useRouter } from "next/router";
const VerifiedBanner = ({ toggle, setToggle }) => {
  useDisableBodyScroll(toggle);
  const router = useRouter();
  return (
    <div className={`${styles["modal-window"]} ${toggle ? styles.show : ""}`}>
      <div className={styles["modal-login"]}>
        <div className={styles["header"]}>
          Your account is successfully verified
        </div>
        <div className={styles["login-form"]}>
          <button
            className={`btn btn-primary btn-block ${styles["login-button"]} mt-3`}
            onClick={() => {
              router.push("/", undefined, { shallow: true });
              setToggle(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiedBanner;
