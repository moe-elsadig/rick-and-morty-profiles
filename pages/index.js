import Head from "next/head";
import { getCharacters } from "rickmortyapi";

export default function Home({ characterData }) {
  let cardsMarkup =
    characterData?.status === 200
      ? "Card data available"
      : "Card data not available";

  return (
    <div className="">
      <Head>
        <title>Rick & Morty Encyclopedia</title>
        <meta
          name="description"
          content="Rick & Morty Encyclopedia powere by the rickandmortyapi.com API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen">{cardsMarkup}</main>
    </div>
  );
}

export async function getServerSideProps() {
  const characterData = await getCharacters({ page: 1 });

  return {
    props: { characterData },
  };
}
