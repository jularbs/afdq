import styles from "./CandidateOverview.module.scss";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Link from "next/link";

import { useState, useEffect } from "react";
import { shuffle } from "assets/utilities/commonFunctions";

import { isAuth } from "/actions/auth";
import VoteConfirmation from "../VoteConfirmation/VoteConfirmation";
import { useRouter } from "next/router";

import LoginForm from "components/LoginForm/LoginForm";

const CandidateOverview = ({ data, details, candidates }) => {
  const router = useRouter();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [voteInfo, setVoteInfo] = useState({
    title: "",
    slug: "",
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [otherCandidates, setOtherCandidates] = useState([]);

  useEffect(() => {
    setOtherCandidates(
      shuffle(candidates).filter((candidate) => candidate.slug !== data.slug)
    );
  }, [candidates]);

  const showOtherCandidates = () => {
    return otherCandidates.map((candidate, index) => {
      return (
        <Link href={`/${candidate.slug}`} key={index} passHref>
          <div className={styles["candidate-item"]}>
            <div className={styles["image-card"]}>
              <div
                className={styles["image"]}
                style={{
                  backgroundImage: `url("${candidate.image.location}")`,
                }}
              />
            </div>

            <div className={styles["name"]}>{candidate.name}</div>
            <div className={styles["city"]}>{candidate.meta.city}</div>
          </div>
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
          <span>Voting starts at October 8, 2022</span>
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
            <span>Vote</span>
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
        <div className="row no-gutters">
          <div className="col-lg-6 col-sm-12 align-items-center">
            <div className={`p-md-5`}>
              <div className={styles["media-container"]}>
                <ReactPlayer
                  controls={true}
                  // playing={true}
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
              <div className={styles["header"]}>Meet all the candidates!</div>
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
