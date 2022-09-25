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
      <Head>
        <title>Aliwan Fiesta Digital Queen 2021</title>
        <meta name="canonical" href={`https://dzrh.com.ph/afdq`} />

        <meta
          name="description"
          content="Support your Aliwan Fiesta Digital Queen 2021 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Aliwan Fiesta Digital Queen 2021`}
        />
        <meta
          property="og:description"
          content="Support your Aliwan Fiesta Digital Queen 2021 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta
          property="og:image"
          content={`${process.env.CLIENT_URL}/afdq/newlinkpreview.jpeg`}
        />
        <meta property="og:link" content={`${process.env.CLIENT_URL}/afdq`} />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`Aliwan Fiesta Digital Queen 2021`}
        />
        <meta
          name="twitter:description"
          content="Support your Aliwan Fiesta Digital Queen 2021 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta
          name="twitter:image"
          content={`${process.env.CLIENT_URL}/afdq/newlinkpreview.jpeg`}
        />
        <meta name="twitter:url" content={`${process.env.CLIENT_URL}/afdq`} />

        <meta name="twitter:site" content="@dzrhnews" />
        <meta name="twitter:creator" content="@dzrhnews" />
      </Head>
      <AfdqLayout>
        <TopBanner />
        <SponsorsTabTest />
        {/* <SponsorsTab /> */}
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
