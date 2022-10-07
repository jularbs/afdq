import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/globals.scss";

import { initFacebookSdk } from "../helpers/oauth/facebooksdk";
import { useEffect } from "react";

import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Head from "next/head";

NProgress.configure({ showSpinner: true });

export function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFacebookSdk();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Aliwan Fiesta Digital Queen</title>
        <meta property="og:title" content={`Aliwan Fiesta Digital Queen`} />
        <meta
          property="og:description"
          content={`The continued enforcement of quarantine regulations in the Philippines due to Covid-19 has made it imperative to expand our line-up of virtual events. With the live staging of Aliwan Fiesta still on hold, and with it the search for Reyna ng Aliwan, which has jumpstarted the career of many beauteous Filipinas on the national and international pageant circuit, Manila Broadcasting Company now launches the third edition of its online search for Aliwan Fiesta Digital Queen.`}
        />
        <meta
          property="og:image"
          content={`${process.env.CLIENT_URL}/seothumb.jpeg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${process.env.CLIENT_URL}/seothumb.jpeg`}
        />
        <meta name="twitter:title" content={`Aliwan Fiesta Digital Queen`} />
        <meta
          name="twitter:description"
          content={`The continued enforcement of quarantine regulations in the Philippines due to Covid-19 has made it imperative to expand our line-up of virtual events. With the live staging of Aliwan Fiesta still on hold, and with it the search for Reyna ng Aliwan, which has jumpstarted the career of many beauteous Filipinas on the national and international pageant circuit, Manila Broadcasting Company now launches the third edition of its online search for Aliwan Fiesta Digital Queen.`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.CLIENT_URL}/seothumb.jpeg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
