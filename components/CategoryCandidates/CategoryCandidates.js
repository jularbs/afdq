import styles from "./CategoryCandidates.module.scss";

import Link from "next/link";
import { shuffle } from "assets/utilities/commonFunctions";

const CategoryCandidates = ({ title, candidates }) => {
  const showCandidates = () => {
    return shuffle(candidates).map((candidate, index) => (
      <Link href={`/${candidate.slug}`} key={index} passHref>
        <div className={styles["candidate-item"]}>
          <div
            className={styles["image"]}
            style={{
              backgroundImage: `url("${candidate.image.location}")`,
            }}
          >
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
      <div className={styles["gold-bar"]}>
        <div className={styles["hr"]}></div>
        <div className={styles["header"]}>
          {title}
          <div className={`${styles["star"]} ${styles["left"]}`}></div>
          <div className={`${styles["star"]} ${styles["right"]}`}></div>
        </div>
      </div>

      <div className={styles["candidates-row"]}>{showCandidates()}</div>
    </div>
  );
};

export default CategoryCandidates;
