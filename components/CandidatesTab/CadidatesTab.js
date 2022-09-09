import styles from "./CadidatesTab.module.scss";

import CategoryCandidates from "../CategoryCandidates/CategoryCandidates";
import { useState, useEffect } from "react";
import { shuffle } from "assets/utilities/commonFunctions";

const CandidatesTab = ({ dataEntries }) => {
  const LUZON = "luzon";
  const VISAYAS = "visayas";
  const MINDANAO = "mindanao";

  const [candidates, setCandidates] = useState([]);
  const [options, setOptions] = useState([]);

  // const fetchOptions = () => {
  //   getEntries().then((data) => {
  //     setOptions(data);
  //   });
  // };

  // const filterByRegion = (set, region) => {
  //   return {
  //     region: region,
  //     candidates: set.filter((entry) => entry.meta.region == region),
  //   };
  // };

  // const filterOptions = () => {
  //   setCandidates([
  //     filterByRegion(dataEntries, LUZON),
  //     filterByRegion(dataEntries, VISAYAS),
  //     filterByRegion(dataEntries, MINDANAO),
  //   ]);
  // };

  // useEffect(() => {
  //   filterOptions();
  // }, [dataEntries]);

  const showCandidates = () => {
    return shuffle([{ region: "ALL", candidates: dataEntries }]).map(
      (data, index) => {
        return (
          <CategoryCandidates
            title={data.region}
            candidates={data.candidates}
            key={index}
          />
        );
      }
    );
  };

  return (
    <div className={styles["afdq-candidatestab"]} id="candidates">
      <div className={styles["header"]}>top 12 candidates</div>
      {showCandidates()}
    </div>
  );
};

export default CandidatesTab;
