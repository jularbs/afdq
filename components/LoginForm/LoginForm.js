import styles from "./LoginForm.module.scss";

import useDisableBodyScroll from "hooks/useDisableScroll";
import { useState } from "react";
import Router from "next/router";

import { login, authenticate } from "actions/auth";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

const LoginForm = ({ toggle, setToggle }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [values, setValues] = useState({
    error: "",
    success: "",
    message: "",
    loading: false,
  });

  useDisableBodyScroll(toggle);

  const handleLoginForm = (name) => (e) => {
    setLoginForm({ ...loginForm, [name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    setValues({ ...values, loading: true });
    e.preventDefault();
    login(loginForm)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          console.log(data);
          authenticate(data, () => {
            setValues({
              ...values,
              error: "",
              success: "Logged in successfully",
              loading: false,
            });
            Router.reload();

            setTimeout(() => {
              setToggle(false);
            }, 3000);
          });
        }
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
    <div className={`${styles["modal-window"]} ${toggle ? styles.show : ""}`}>
      <div className={styles["modal-login"]}>
        <IoCloseOutline
          className={styles["modal-close"]}
          onClick={() => {
            setToggle(false);
          }}
        />

        <div className={styles["header"]}>LOGIN</div>
        {onError()}
        {onSuccess()}
        <div className={styles["login-form"]}>
          <div>
            <label className={styles["input"]}>
              <input
                className={styles["input__field"]}
                type="text"
                value={loginForm.email}
                onChange={handleLoginForm("email")}
              />
              <span className={styles["input__label"]}>Email</span>
            </label>
          </div>
          <div>
            <label className={`${styles["input"]} mb-1`}>
              <input
                className={styles["input__field"]}
                type="password"
                value={loginForm.password}
                onChange={handleLoginForm("password")}
              />
              <span className={styles["input__label"]}>Password</span>
            </label>
          </div>
          <div className={styles["links"]}>
            <Link href="/auth/forgotpassword">
              <div
                onClick={() => {
                  setToggle(false);
                }}
              >
                Forgot password?
              </div>
            </Link>
          </div>
          <button
            className={`btn btn-primary btn-block ${styles["login-button"]} mt-3`}
            onClick={handleLoginSubmit}
          >
            <div
              className="spinner-border spinner-border-sm mr-2"
              style={{ display: values.loading ? "" : "none" }}
            ></div>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
