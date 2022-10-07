import AfdqLayout from "layouts/AfdqLayout";
import TopBanner from "components/TopBanner/TopBanner";

import ForgotPasswordForm from "components/ForgotPasswordForm/ForgotPasswordForm";
import Head from "next/head";
const forgotPasswordPage = () => {
  return (
    <>
      <AfdqLayout>
        <TopBanner />
        <ForgotPasswordForm />
      </AfdqLayout>
    </>
  );
};

export default forgotPasswordPage;
