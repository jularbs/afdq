import styles from "./CandidateOverview.module.scss";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Link from "next/link";

import { useState, useEffect } from "react";
import { shuffle } from "assets/utilities/commonFunctions";

import { isAuth } from "/actions/auth";
import VoteConfirmation from "../VoteConfirmation/VoteConfirmation";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

import LoginForm from "components/LoginForm/LoginForm";

const CandidateOverview = ({ data, details, candidates }) => {
  const router = useRouter();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [voteInfo, setVoteInfo] = useState({
    title: "",
    slug: "",
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const showOtherCandidates = () => {
    return shuffle(candidates)
      .filter((candidate) => candidate.slug !== data.slug)
      .map((candidate, index) => {
        return (
          <Link href={`/${candidate.slug}`} key={index} passHref>
            <a>
              <div className={styles["candidate-item"]}>
                <div
                  className={styles["image"]}
                  style={{
                    backgroundImage: `url("${candidate.image.location}")`,
                  }}
                ></div>
              </div>
            </a>
          </Link>
        );
      });
  };

  const voteButtonHandler = () => {
    const { startDate, endDate } = details;
    const currentDateTime = new Date();

    if (currentDateTime.toISOString() < startDate) {
      return (
        <button className={`btn ${styles["vote-button"]}`} disabled>
          <span>Voting starts at September 11, 2021</span>
        </button>
      );
    } else if (currentDateTime.toISOString() > endDate) {
      return (
        <button className={`btn ${styles["vote-button"]}`} disabled>
          <span>Voting period has ended</span>
        </button>
      );
    } else {
      if (isAuth()) {
        return (
          <button
            className={`btn ${styles["vote-button"]}`}
            onClick={() => {
              setVoteInfo({
                title: data.meta.name,
                slug: data.slug,
              });
              setConfirmationOpen(true);
            }}
          >
            <span>Vote for this candidate</span>
          </button>
        );
      } else {
        return (
          <button
            className={`btn ${styles["vote-button"]}`}
            onClick={() => {
              setLoginModalOpen(true);
            }}
          >
            <span>Login to vote</span>
          </button>
        );
      }
    }
  };

  return (
    <>
      <div className={styles["candidateoverview-container"]}>
        <LoginForm toggle={loginModalOpen} setToggle={setLoginModalOpen} />
        <VoteConfirmation
          data={voteInfo}
          setData={setVoteInfo}
          toggle={confirmationOpen}
          setToggle={setConfirmationOpen}
        />
        <div
          className={`${styles["top-nav"]} d-flex justify-content-between align-items-center p-2 px-lg-3`}
        >
          <div
            className={`${styles["back-button"]} d-flex align-items-center`}
            onClick={() => router.back()}
          >
            <IoArrowBack />
          </div>
          <div
            className={`${styles["socmed-buttons"]} d-flex align-items-center`}
          >
            <div className={`${styles["label"]} mr-2`}>share</div>
            <div className={`${styles["item"]} mr-1`}>
              <TwitterShareButton
                url={`${process.env.CLIENT_URL}/${data.slug}`}
              >
                <TwitterIcon size={30} round={true} />
              </TwitterShareButton>
            </div>
            <div className={styles["item"]}>
              <FacebookShareButton
                url={`${process.env.CLIENT_URL}/${data.slug}`}
              >
                <FacebookIcon size={30} round={true} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 col-sm-12">
            <div className={`p-md-3`}>
              <div
                className="embed-responsive"
                style={{ aspectRatio: "16 / 9" }}
              >
                <ReactPlayer
                  controls={true}
                  className={styles["react-player"]}
                  url={data.meta.candidateVideo}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className={styles["candidate-details-container"]}>
              <div className={styles["name"]}>{data.name}</div>
              <div className={styles["region"]}>{data.meta.region}</div>
              <div className={styles["city"]}>{data.meta.city}</div>
              <div className={styles["charity"]}>{data.meta.charity}</div>
              <hr />
              <div className={styles["description"]}>
                {data.meta.description}
              </div>
              {voteButtonHandler()}
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className={styles["other-candidates"]}>
              <div className={styles["gold-bar"]}>
                <div className={styles["hr"]}></div>
                <div className={styles["header"]}>
                  Meet all the finalists
                  <div className={`${styles["star"]} ${styles["left"]}`}></div>
                  <div className={`${styles["star"]} ${styles["right"]}`}></div>
                </div>
              </div>
              <div className={styles["other-candidates-row"]}>
                {showOtherCandidates()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateOverview;
