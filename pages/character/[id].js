import React, { useState } from "react";
import Head from "next/head";
import CharacterProfile from "@/components/CharacterProfile";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";

function ProfilePage({ data }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`${theme && "dark"} `}>
      <Head>
        <title>{data?.name}&#39;s Profile</title>
        <meta
          name="description"
          content={`${data?.id}-${data?.name}-Rick & Morty Encyclopedia powere by the rickandmortyapi.com API`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header changeTheme={changeTheme} />
      <main className="flex flex-col min-h-screen h-full items-center p-10 bg-gray-100 dark:bg-gray-900">
        <CharacterProfile characterData={data} />
      </main>
    </div>
  );
}

export default ProfilePage;

export async function getServerSideProps({ query }) {
  const { id } = query;

  // use the online REST API
  const characterEndpoint = `https://rickandmortyapi.com/api/character/${id}`;
  const data = await (await fetch(characterEndpoint)).json();

  return {
    props: { data },
  };
}
