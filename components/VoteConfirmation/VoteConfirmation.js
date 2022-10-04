import styles from "./VoteConfirmation.module.scss";

import { useState } from "react";
import useDisableBodyScroll from "hooks/useDisableScroll";

import { voteCandidate } from "actions/afdq";
import { getCookie } from "actions/auth";

import { IoCloseOutline } from "react-icons/io5";

const VoteConfirmation = ({ data, setData, toggle, setToggle }) => {
  const token = getCookie("sso-token");

  const [values, setValues] = useState({
    error: "",
    success: "",
    message: "",
    loading: false,
  });
  const [toggleTNC, setToggleTNC] = useState(false);

  useDisableBodyScroll(toggle);

  const onError = () =>
    values.error && (
      <div class="alert alert-warning" role="alert">
        {values.error}
      </div>
    );

  const handleSubmit = () => {
    setValues({ ...values, loading: true });
    setToggleTNC(false);
    voteCandidate(data.slug, token)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, loading: false, error: data.error });
        } else {
          console.log(data);
          setValues({
            ...values,
            loading: false,
            error: "",
            success: "Vote casted successfully",
          });
        }
      })
      .catch((err) => {
        setValues({
          ...values,
          loading: false,
          error: err.response.data.error,
        });
      });
  };

  return (
    <div>
      <div className={`${styles["modal-window"]} ${toggle ? styles.show : ""}`}>
        <div className={styles["modal-confirmation"]}>
          <IoCloseOutline
            title="Close"
            className={styles["modal-close"]}
            onClick={() => {
              setToggle(false);
              setData({ title: "", slug: "" });
              setValues({
                error: "",
                success: "",
                message: "",
                loading: false,
              });
            }}
          />
          {values.success ? (
            <div>
              <div className={`${styles["title"]} mt-3`}>COUNTED!</div>
              <div className={styles["sub-header"]}>
                You can cast your vote again after 24 hours. Thank you for
                voting.
              </div>
            </div>
          ) : (
            <div>
              <div className={styles["sub-header"]}>
                You are voting for candidate
              </div>
              <div className={styles["title"]}>{data.title}</div>
            </div>
          )}

          {onError()}
          <div className={styles["confirmation-form"]}>
            <button
              className={`btn btn-block ${styles["cancel-button"]} mt-3`}
              onClick={() => {
                setToggle(false);
                setData({ title: "", slug: "" });
                setValues({
                  error: "",
                  success: "",
                  message: "",
                  loading: false,
                });
              }}
            >
              {values.success ? "Close" : "Cancel"}
            </button>
            {values.success ? (
              ""
            ) : (
              <div>
                <div className="d-flex align-items-center mt-3">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={toggleTNC}
                    onChange={(e) => {
                      setToggleTNC(!toggleTNC);
                    }}
                  />
                  <label className="mb-0" style={{ fontSize: "10px" }}>
                    I have read and accept the{" "}
                    <a
                      target="_blank"
                      href="https://dzrh.com.ph/pages/termsandconditions"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  className={`btn btn-primary btn-block mt-3 d-flex justify-content-center align-items-center ${styles["primary-button"]}`}
                  onClick={() => {
                    setValues({
                      error: "",
                      success: "",
                      message: "",
                      loading: false,
                    });
                    handleSubmit();
                  }}
                  disabled={!toggleTNC}
                >
                  <div
                    className="spinner-border spinner-border-sm mr-2"
                    style={{ display: values.loading ? "" : "none" }}
                  ></div>
                  Vote now!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteConfirmation;
