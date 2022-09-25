import styles from "./ForgotPasswordForm.module.scss";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { changePassword } from "actions/auth";

const ChangePasswordForm = () => {
  const router = useRouter();

  const [userID, setUserID] = useState("");
  const [changeToken, setChangeToken] = useState("");

  const [values, setValues] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

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

  useEffect(() => {
    setUserID(router.query.i);
    setChangeToken(router.query.t);
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, success: "", error: "" });

    if (form.password.length < 8) {
      setValues({
        ...values,
        loading: false,
        success: "",
        error: "Password should be longer than 8 characters",
      });
    } else if (form.password !== form.confirmPassword) {
      setValues({
        ...values,
        loading: false,
        success: "",
        error: "Password and Confirm password should match",
      });
    } else {
      changePassword({
        _id: userID,
        token: changeToken,
        password: form.confirmPassword,
      })
        .then((data) => {
          if (data.error) {
            setValues({
              ...values,
              loading: false,
              error: data.error,
              success: "",
            });
          }
          setForm({ password: "", confirmPassword: "" });
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
            success: "",
            error: err.response.data.error,
            loading: false,
          });
        });
    }
  };

  return (
    <>
      <div className={styles["fpf-container"]}>
        <div className={styles["form-container"]}>
          <div className={`${styles["heading"]} ${styles["header"]}`}>
            Change Password
          </div>
          <div className={`${styles["heading"]} ${styles["sub-heading"]}`}>
            Please enter a new password for your account.
          </div>
          {onError()}
          {onSuccess()}
          <label className={styles["input"]}>
            <input
              className={styles["input__field"]}
              type="password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
            <span className={styles["input__label"]}>New Password</span>
          </label>
          <label className={styles["input"]}>
            <input
              className={styles["input__field"]}
              type="password"
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
              }}
            />
            <span className={styles["input__label"]}>Confirm New Password</span>
          </label>
          <button
            className={`btn ${styles["btn-fp"]} px-5 d-flex align-items-center`}
            onClick={handleSubmit}
          >
            <div
              className="spinner-border spinner-border-sm mr-2"
              style={{ display: values.loading ? "" : "none" }}
            ></div>
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
