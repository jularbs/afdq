import AfdqLayout from "layouts/AfdqLayout";
import TopBanner from "components/TopBanner/TopBanner";

import ForgotPasswordForm from "components/ForgotPasswordForm/ForgotPasswordForm";
import Head from "next/head";
const forgotPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password | Aliwan Fiesta Digital Queen 2021</title>
        <meta name="canonical" href={`https://dzrh.com.ph/afdq`} />

        <meta
          name="description"
          content="Support your Aliwan Fiesta Digital Queen 2021 candidate by voting them in the Netizens' Choice Award. Voting is from September 11 to October 3."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Forgot Password | Aliwan Fiesta Digital Queen 2021`}
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
        <ForgotPasswordForm />
      </AfdqLayout>
    </>
  );
};

export default forgotPasswordPage;
