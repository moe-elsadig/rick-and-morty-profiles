import React, { useEffect, useState } from "react";
import Head from "next/head";
import LocationProfile from "@/components/LocationProfile";
import EpisodeProfile from "@/components/EpisodeProfile";
import Header from "@/components/Header";

function EpisodePage({ data }) {
  return (
    <div className={`bg-gray-200 dark:bg-gray-700`}>
      <Head>
        <title>{data?.name} - Episode</title>
        <meta
          name="description"
          content={`${data?.id}-${data?.name}-${data?.episode}-Rick & Morty Encyclopedia powere by the rickandmortyapi.com API`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen h-full items-center p-10 bg-gray-100 dark:bg-gray-900">
        <EpisodeProfile episodeData={data} />
      </main>
      <footer className="border-t bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap items-end">
        <p className="max-w-screen-2xl text-sm text-gray-400 dark:text-gray-500 px-10 pt-10 mx-auto">
          Designed & Developed by{" "}
          <a
            href="https://moeabdalla.com/"
            alt=""
            target="_blank"
            rel="noreferrer"
            className="text-red-400 dark:text-red-500"
          >
            Moe.
          </a>
        </p>

        <p className="max-w-screen-2xl text-sm text-gray-400 dark:text-gray-500 px-10 mx-auto">
          Powered by{" "}
          <a
            href="https://rickandmortyapi.com/"
            alt=""
            target="_blank"
            rel="noreferrer"
            className="text-red-400 dark:text-red-500"
          >
            RickAndMortyApi.com
          </a>
        </p>
      </footer>{" "}
    </div>
  );
}

export default EpisodePage;

export async function getServerSideProps({ query }) {
  const { id } = query;

  // use the online REST API
  const characterEndpoint = `https://rickandmortyapi.com/api/episode/${id}`;
  const data = await (
    await fetch(characterEndpoint).catch((err) => {
      return;
    })
  ).json();

  return {
    props: { data },
  };
}
