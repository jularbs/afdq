import AfdqLayout from "layouts/AfdqLayout";
import CandidateOverview from "components/CandidateOverview/CandidateOverview";
import { getDetails, getEntries } from "actions/afdq";
import axios from "axios";
import Head from "next/head";

const afdq = ({ data, details, candidates }) => {
  return (
    <>
      <Head>
        <title>{`${data.name} | Aliwan Fiesta Digital Queen 2022`}</title>
        <meta
          name="canonical"
          href={`${process.env.CLIENT_URL}/${data.slug}`}
        />

        <meta
          name="description"
          content="Support your Aliwan Fiesta Digital Queen 2022 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${data.name} | Aliwan Fiesta Digital Queen 2022`}
        />
        <meta
          property="og:description"
          content="Support your Aliwan Fiesta Digital Queen 2022 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta
          property="og:image"
          content={`${process.env.CLIENT_URL}/seothumb.jpeg`}
        />
        <meta
          property="og:link"
          content={`${process.env.CLIENT_URL}/${data.slug}`}
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`${data.name} | Aliwan Fiesta Digital Queen 2022¯`}
        />
        <meta
          name="twitter:description"
          content="Support your Aliwan Fiesta Digital Queen 2022 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta
          name="twitter:image"
          content={`${process.env.CLIENT_URL}/seothumb.jpeg`}
        />
        <meta
          name="twitter:url"
          content={`${process.env.CLIENT_URL}/${data.slug}`}
        />
      </Head>
      <AfdqLayout>
        <CandidateOverview
          data={data}
          details={details}
          candidates={candidates}
        />
      </AfdqLayout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const res = await axios.get(`${process.env.MBC_API}/poll-option/${slug}`);
  const data = await res.data;

  const res2 = await getDetails();
  const details = await res2;

  const res3 = await getEntries();
  const candidates = await res3;
  return {
    props: { data, details, candidates },
  };
}

export default afdq;
