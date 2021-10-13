import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";
import Head from "next/head";
import { getCharacters } from "rickmortyapi";

export default function Home({ characterData }) {
  let cardsMarkup =
    characterData?.status === 200 ? (
      <CharacterList charactersData={characterData?.data?.results} />
    ) : (
      <div className="flex flex-1">
        <p className="m-auto">Data loading...</p>
      </div>
    );

  return (
    <div className="dark">
      <Head>
        <title>Rick & Morty Encyclopedia</title>
        <meta
          name="description"
          content="Rick & Morty Encyclopedia powere by the rickandmortyapi.com API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
