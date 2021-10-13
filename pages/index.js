import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";

const startingPage = 1;
const defaultEndpoint = "https://rickandmortyapi.com/api/character/?page=1";

export default function Home({ data }) {
  console.log(data);

  const { info, results: newResults = [] } = data;
  const [results, setResults] = useState(newResults);
  const [page, setPage] = useState({
    ...info,
    currentPageNo: startingPage,
    currentPage: defaultEndpoint,
  });

  const { currentPage, currentPageNo } = page;

  useEffect(() => {
    console.log("effect:", currentPage, currentPageNo);
    // if (currentPageNo === startingPage) return;
    // if (currentPage === defaultEndpoint) return;

    async function getNewData() {
      console.log("request new data");
      // use the installed API
      const res = await getCharacters({ page: currentPageNo });
      const data = res.data;

      // use the online REST API
      // const data = await (await fetch(currentPage)).json();

      console.log("set new data", data);
      setResults(data.results);
      setPage((prev) => {
        return {
          ...prev,
          ...data.info,
        };
      });
    }

    getNewData();
  }, [currentPage, currentPageNo]);

  let nextPage = () => {
    setPage((prev) => {
      return {
        ...prev,
        currentPage: prev.next,
        currentPageNo: prev.currentPageNo + 1,
      };
    });
  };

  let prevPage = () => {
    setPage((prev) => {
      return {
        ...prev,
        currentPage: prev.prev,
        currentPageNo: prev.currentPageNo - 1,
      };
    });
  };

  let cardsMarkup = results ? (
    <CharacterList charactersData={results} />
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
      <main className="flex flex-col min-h-screen">
        {cardsMarkup}
        <div className="m-auto">
          <button onClick={prevPage}>Back</button>
          {"  "}
          <button onClick={nextPage}>Next</button>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // use the installed API
  const res = await getCharacters({ page: startingPage });
  const data = res.data;

  // use the online REST API
  // const data = await (await fetch(defaultEndpoint)).json();

  return {
    props: { data },
  };
}
