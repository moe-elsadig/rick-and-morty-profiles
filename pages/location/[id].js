import React, { useEffect, useState } from "react";
import Head from "next/head";
import LocationProfile from "@/components/LocationProfile";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";

function LocationPage({ data }) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme === "false") {
      setTheme(false);
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };

  return (
    <div className={`${theme && "dark"} bg-gray-500`}>
      <Head>
        <title>{data?.name} - Location</title>
        <meta
          name="description"
          content={`${data?.id}-${data?.name}-Rick & Morty Encyclopedia powere by the rickandmortyapi.com API`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header changeTheme={changeTheme} />
      <main className="flex flex-col min-h-screen h-full items-center p-10 bg-gray-100 dark:bg-gray-900">
        <LocationProfile locationData={data} />
      </main>
    </div>
  );
}

export default LocationPage;

export async function getServerSideProps({ query }) {
  const { id } = query;

  // use the online REST API
  const characterEndpoint = `https://rickandmortyapi.com/api/location/${id}`;
  const data = await (await fetch(characterEndpoint)).json();

  return {
    props: { data },
  };
}
