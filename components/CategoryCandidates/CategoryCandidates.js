import styles from "./CategoryCandidates.module.scss";

import Link from "next/link";
import { shuffle } from "assets/utilities/commonFunctions";

import { useState, useEffect } from "react";

const CategoryCandidates = ({ title, candidates }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(shuffle(candidates));
  }, [candidates]);

  const showCandidates = () => {
    return display.map((candidate, index) => (
      <Link href={`/${candidate.slug}`} key={index} passHref>
        <div className={styles["candidate-item"]}>
          <div className={styles["image-card"]}>
            <div
              className={styles["image"]}
              style={{
                backgroundImage: `url("${candidate.image.location}")`,
              }}
            ></div>
            <div className={styles["button"]}>vote</div>
          </div>

          <div className={styles["name"]}>{candidate.name}</div>
          <div className={styles["city"]}>{candidate.meta.city}</div>
        </div>
      </Link>
    ));
  };
  return (
    <div className={styles["category-candidates"]}>
      <div className={styles["candidates-row"]}>{showCandidates()}</div>
    </div>
  );
};

export default CategoryCandidates;
