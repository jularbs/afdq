import styles from "./ForgotPasswordForm.module.scss";
import { useState } from "react";

import { requestChangePassword } from "actions/auth";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const [values, setValues] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });

    requestChangePassword(email)
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            loading: false,
            error: data.error,
            success: "",
          });
        }
        setEmail("");
        setValues({
          ...values,
          error: "",
          loading: false,
          success: data.success,
        });
      })
      .catch((err) => {
        setValues({
          ...values,
          error: err.response.data.error,
          loading: false,
        });
      });
  };

  const onError = () =>
    values.error && (
      <div className="alert-card error" role="alert">
        {values.error}
      </div>
    );
  const onSuccess = () =>
    values.success && (
      <div className="alert-card success" role="alert">
        {values.success}
      </div>
    );

  return (
    <div className={styles["fpf-container"]}>
      <div className={styles["form-container"]}>
        <div className={`${styles["heading"]} ${styles["header"]}`}>
          Forgot Password
        </div>
        <div className={`${styles["heading"]} ${styles["sub-heading"]}`}>
          Enter your registered email address and we'll send you a link to reset
          your password
        </div>
        {onError()}
        {onSuccess()}
        <label className={styles["input"]}>
          <input
            className={styles["input__field"]}
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className={styles["input__label"]}>Email Address</span>
        </label>
        <button
          className={`btn ${styles["btn-fp"]} px-5 d-flex align-items-center`}
          onClick={handleSubmit}
        >
          <div
            className="spinner-border spinner-border-sm mr-2"
            style={{ display: values.loading ? "" : "none" }}
          ></div>
          Send to my email
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
