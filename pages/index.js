import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen">
        <div className="m-auto flex flex-col items-center ">
          <h1 className="text-4xl">
            Welcome to the Rick and Morty Profiles...
          </h1>
          <p>Currently in development</p>

          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Powered by the Rick and Morty API
          </a>
        </div>
      </main>
    </div>
  );
}
