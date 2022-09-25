import "assets/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { initFacebookSdk } from "../helpers/oauth/facebooksdk";
import { useEffect } from "react";

export function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFacebookSdk();
  }, []);


  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
