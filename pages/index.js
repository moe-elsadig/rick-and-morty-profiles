import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";
import Paginator from "@/components/Paginator";
import Head from "next/head";
import { useEffect, useState } from "react";

const startingPage = 1;
const defaultEndpoint = "https://rickandmortyapi.com/api/character/?page=1";

export default function Home({ data }) {
  const [theme, setTheme] = useState(true);
  const { info, results: newResults = [] } = data;
  const [results, setResults] = useState(newResults);
  const [page, setPage] = useState({
    ...info,
    currentPageNo: startingPage,
    currentPage: defaultEndpoint,
  });

  const { currentPage, currentPageNo } = page;

  useEffect(() => {
    async function getNewData() {
      // use the online REST API
      const data = await (await fetch(currentPage)).json();
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

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme === "false") {
      setTheme(false);
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };

  return (
    <div className={`${theme && "dark"} bg-gray-500`}>
      <Head>
        <title>Rick & Morty Encyclopedia</title>
        <meta
          name="description"
          content="Rick & Morty Encyclopedia powere by the rickandmortyapi.com API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header changeTheme={changeTheme} />
      <main className="flex flex-col min-h-screen h-full bg-gray-100 dark:bg-gray-900">
        {cardsMarkup}
        <div className="m-auto">
          <Paginator
            nextFn={nextPage}
            prevFn={prevPage}
            currentPage={currentPageNo}
            maxPage={page.pages}
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // use the online REST API
  const data = await (await fetch(defaultEndpoint)).json();

  return {
    props: { data },
  };
}
