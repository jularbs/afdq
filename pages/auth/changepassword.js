import AfdqLayout from "layouts/AfdqLayout";
import TopBanner from "components/TopBanner/TopBanner";

import ChangePasswordForm from "components/ForgotPasswordForm/ChangePasswordForm";
import Head from "next/head";
const changePasswordPage = () => {
  return (
    <>

      <AfdqLayout>
        <TopBanner />
        <ChangePasswordForm />
      </AfdqLayout>
    </>
  );
};

export default changePasswordPage;
