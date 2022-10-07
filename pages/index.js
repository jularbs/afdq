import SponsorsTabTest from "components/SponsorsTab/SponsorsTabTest";
import CandidatesTab from "components/CandidatesTab/CadidatesTab";
import AfdqLayout from "layouts/AfdqLayout";
import TopBanner from "components/TopBanner/TopBanner";
import AboutTab from "components/AboutTab/AboutTab";

import { getEntries } from "actions/afdq";
import Head from "next/head";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import VerifiedBanner from "components/VerifiedBanner/VerifiedBanner";
const afdq = ({ entries }) => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (router.query?.verified) {
      setIsVerified(true);
    }
  }, [router]);

  return (
    <>
      <AfdqLayout>
        <TopBanner />
        <SponsorsTabTest />
        <CandidatesTab dataEntries={entries} />
        <AboutTab />
        <VerifiedBanner toggle={isVerified} setToggle={setIsVerified} />
      </AfdqLayout>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getEntries();
  const entries = res;

  // Pass data to the page via props
  return { props: { entries } };
}

export default afdq;
