import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import LoadingScreen from "@/components/LoadingScreen";
import { Fragment, useEffect, useState } from "react";

const progress = new ProgressBar({
  size: 4,
  color: "#61ff18",
  className: "z-50",
  delay: 50,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
