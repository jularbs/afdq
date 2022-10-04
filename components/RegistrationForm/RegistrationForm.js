import styles from "./RegistrationForm.module.scss";

import useDisableBodyScroll from "hooks/useDisableScroll";
import { useState } from "react";
import { signup } from "actions/auth";

import dynamic from "next/dynamic";
const Reaptcha = dynamic(() => import("reaptcha"), { ssr: true });

import { IoLogoFacebook, IoCloseOutline } from "react-icons/io5";

//fbsdk
import { login } from "helpers/oauth/facebooksdk";

const RegistrationForm = ({ toggle, setToggle }) => {
  const [registrationForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [values, setValues] = useState({
    error: "",
    success: "",
    message: "",
    loading: false,
  });

  const [validation, setValidation] = useState({
    confirmPassword: false,
    captcha: false,
    mobileNumber: true,
    email: true,
  });

  const [toggleTNC, setToggleTNC] = useState(false);

  const handleRegistrationForm = (name) => (e) => {
    setRegistrationForm({ ...registrationForm, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/.test(
        registrationForm.confirmPassword
      )
    ) {
      setValues({
        ...values,
        error:
          "Password too short. Password requirements: At least 1 alphabet, at least 1 digit, contains no space, Optional special characters e.g. @$!%*#?&^_-, Minimum 8 characters long",
      });
    } else if (
      registrationForm.firstName == "" ||
      registrationForm.lastName == ""
    ) {
      setValues({
        ...values,
        error: "Please provide your full name",
      });
    } else if (!/^(09|\+639)\d{9}$/.test(registrationForm.mobileNumber)) {
      setValues({
        ...values,
        error:
          "Please enter a valid mobile number. ex. 09171234567 or +639123456789",
      });
      setValidation({ ...validation, mobileNumber: false });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        registrationForm.email
      )
    ) {
      setValues({
        ...values,
        error: "Please enter a valid email address",
      });
      setValidation({ ...validation, email: false });
    } else if (!validation.captcha) {
      setValues({
        ...values,
        error: "Please validate that you are not a robot.",
      });
    } else if (registrationForm.confirmPassword !== registrationForm.password) {
      setValues({
        ...values,
        error: "Password and Confirm Password should match.",
      });
      setValidation({ ...validation, confirmPassword: true });
    } else {
      setValues({ ...values, error: "", success: "" });
      setValidation({ ...validation, confirmPassword: false });

      setValues({ ...values, loading: true });
      signup(registrationForm)
        .then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
          } else {
            setValues({
              ...values,
              success: data.success,
              error: "",
              loading: false,
            });
            setRegistrationForm({
              firstName: "",
              lastName: "",
              gender: "",
              mobileNumber: "",
              email: "",
              password: "",
              confirmPassword: "",
            });

            setToggleTNC(false);
            setValidation({
              confirmPassword: false,
              captcha: false,
              email: true,
              mobileNumber: true,
            });

            setTimeout(() => {
              setToggle(false);
              setValues({ ...values, success: "" });
            }, 5000);
          }
        })
        .catch((err) => {
          setValues({
            ...values,
            error: err.response.data.error,
            loading: false,
          });
        });
    }
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

  const handleCaptchaVerify = (e) => {
    setValidation({ ...validation, captcha: true });
  };

  useDisableBodyScroll(toggle);

  return (
    <div>
      <div
        id="registration-modal"
        className={`${styles["modal-window"]} ${toggle ? styles["show"] : ""}`}
      >
        <div className={styles["modal-registration"]}>
          <IoCloseOutline
            className={styles["modal-close"]}
            onClick={() => {
              setToggle(false);
            }}
          />
          <div className={styles["header"]}>REGISTER</div>
          {onError()}
          {onSuccess()}
          <div className={styles["registration-form"]}>
            <button
              className={`btn btn-primary btn-block ${styles["fb-button"]} d-flex align-items-center`}
              onClick={async () => {
                const details = await login();
                setRegistrationForm({
                  ...registrationForm,
                  firstName: details.first_name,
                  lastName: details.last_name,
                  email: details.email,
                  gender: details.gender,
                });
              }}
            >
              <IoLogoFacebook className={styles.icon} />
              Fill form with Facebook
            </button>
            {/* <button
              id="customGbtn"
              className={`btn btn-primary ${styles["g-button"]} btn-block mb-3 d-flex align-items-center`}
            >
              <IoLogoGoogle className={styles["icon"]} />
              Fill form with Google
            </button> */}
            <div>
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="text"
                  value={registrationForm.firstName}
                  onChange={handleRegistrationForm("firstName")}
                />
                <span className={styles["input__label"]}>First Name</span>
              </label>
            </div>
            <div>
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="text"
                  value={registrationForm.lastName}
                  onChange={handleRegistrationForm("lastName")}
                />
                <span className={styles["input__label"]}>Last Name</span>
              </label>
            </div>
            <div>
              <label className={styles["input"]}>
                <select
                  className={styles["input__field"]}
                  onChange={handleRegistrationForm("gender")}
                  value={registrationForm.gender}
                >
                  <option value="prefer not to answer">
                    Prefer not to answer
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <span className={styles["input__label"]}>Gender</span>
              </label>
            </div>
            <div>
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="text"
                  value={registrationForm.mobileNumber}
                  onChange={handleRegistrationForm("mobileNumber")}
                />
                <span
                  className={`${styles["input__label"]} ${
                    validation.mobileNumber ? "" : styles["failvalidation"]
                  }
                  }`}
                >
                  Mobile Number
                </span>
              </label>
            </div>

            <div className="">
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="email"
                  value={registrationForm.email}
                  onChange={handleRegistrationForm("email")}
                />
                <span
                  className={`${styles["input__label"]} ${
                    validation.email ? "" : styles["failvalidation"]
                  }`}
                >
                  Email
                </span>
              </label>
            </div>
            <div>
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="password"
                  value={registrationForm.password}
                  onChange={handleRegistrationForm("password")}
                />
                <span className={styles["input__label"]}>password</span>
              </label>
            </div>
            <div>
              <label className={styles["input"]}>
                <input
                  className={styles["input__field"]}
                  type="password"
                  value={registrationForm.confirmPassword}
                  onChange={handleRegistrationForm("confirmPassword")}
                />
                <span
                  className={`${styles["input__label"]} ${
                    validation.confirmPassword ? styles["failvalidation"] : ""
                  }`}
                >
                  confirm password
                </span>
              </label>
            </div>

            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={toggleTNC}
                onChange={(e) => {
                  setToggleTNC(!toggleTNC);
                }}
              />
              <label className="mb-0">
                I have read and accept the{" "}
                <a target="_blank" href="/pages/termsandconditions">
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <div className="my-2 d-flex justify-content-center">
              <Reaptcha
                sitekey={process.env.GOOGLE_RECAPTCHA_PK}
                onVerify={handleCaptchaVerify}
              />
            </div>
            <button
              className={`btn btn-primary btn-block ${styles["login-button"]} mt-3 d-flex align-items-center justify-content-center`}
              onClick={handleSubmit}
              disabled={!toggleTNC}
            >
              <div
                className="spinner-border spinner-border-sm mr-2"
                style={{ display: values.loading ? "" : "none" }}
              ></div>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
