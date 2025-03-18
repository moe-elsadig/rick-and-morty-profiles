import React from "react";
import Head from "next/head";
import Image from "next/image";

function _offline() {
  return (
    <div className="text-white bg-gray-800 flex flex-col m-auto w-screen h-screen items-center justify-center ">
      <Head>
        <title>Rick & Morty Encyclopedia - Offline</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
        <meta
          name="description"
          content="Rick & Morty Encyclopedia - currently offline"
        />
      </Head>
      <h1 className="text-3xl font-bold">Oh no...</h1>
      <Image
        src="/portal.gif"
        height="300"
        width="300"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <h2 className="text-2l font-semibold italic">
        You are currently offline and this page is not cached
      </h2>
    </div>
  );
}

export default _offline;
