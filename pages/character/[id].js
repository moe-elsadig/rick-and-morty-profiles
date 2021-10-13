import React from "react";
import Head from "next/head";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";

function CharacterProfile({ data }) {
  let dataMarkup = data
    ? Object.keys(data).map((key, index) => (
        <li key={index}>
          {key}: {JSON.stringify(data[key])}
        </li>
      ))
    : null;

  return (
    <div className="">
      <Head>
        <title>{data?.name}&#39;s Profile</title>
        <meta
          name="description"
          content={`${data?.id}-${data?.name}-Rick & Morty Encyclopedia powere by the rickandmortyapi.com API`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col h-screen items-center p-10">
        <button className="m-auto">Back</button>
        <div className="m-auto">
          {/* TODO: replace with a bigger profile card */}
          <ProfileCard characterData={data} index={0} />
          <ul>
            <li>boom</li>
            {dataMarkup}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default CharacterProfile;

export async function getServerSideProps({ query }) {
  const { id } = query;

  // use the online REST API
  const characterEndpoint = `https://rickandmortyapi.com/api/character/${id}`;
  const data = await (await fetch(characterEndpoint)).json();

  return {
    props: { data },
  };
}
