import React from "react";
import Head from "next/head";
import { getCharacter } from "rickmortyapi";
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
        <title>{data?.name}'s Profile</title>
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
  // use the installed API
  const res = await getCharacter(Number(id));
  const data = res.data;

  // use the online REST API
  // const defaultEndpoint = `https://rickandmortyapi.com/api/character/${id}`;
  // const data = await (await fetch(defaultEndpoint)).json();

  return {
    props: { data },
  };
}
