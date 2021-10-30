import React, { useEffect, useState } from "react";
import PageFooter from "@/components/PageFooter";
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
        <html lang="en" />
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen h-full items-center p-10 bg-gray-100 dark:bg-gray-900">
        <EpisodeProfile episodeData={data} />
      </main>
      <PageFooter />
    </div>
  );
}

export default EpisodePage;

export async function getServerSideProps({ query }) {
  const { id } = query;

  // use the online REST API
  const characterEndpoint = `https://rickandmortyapi.com/api/episode/${id}`;
  let data;
  try {
    data = await (await fetch(characterEndpoint)).json();
  } catch (error) {
    data = {
      info: {
        count: 0,
        pages: 1,
        next: characterEndpoint,
        prev: null,
      },
      results: [],
    };
  }

  return {
    props: { data },
  };
}
