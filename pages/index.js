import CardList from "@/components/CardList";
import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";
import Paginator from "@/components/Paginator";
import SiteSections from "@/components/SiteSections";
import Head from "next/head";
import { useEffect, useState } from "react";

const startingPage = 1;
const defaultEndpoint = "https://rickandmortyapi.com/api/character/?page=1";
const locationsEndpoint = "https://rickandmortyapi.com/api/location/?page=1";
const episodesEndpoint = "https://rickandmortyapi.com/api/episode/?page=1";

export default function Home({ data }) {
  const [theme, setTheme] = useState(true);
  const { info, results: newResults = [] } = data;
  const [results, setResults] = useState(newResults);
  const [section, setSection] = useState("characters");
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

  let resetData = (newSection) => {
    async function getNewData() {
      // use the online REST API
      let newEndpoint =
        newSection === "locations"
          ? locationsEndpoint
          : newSection === "episodes"
          ? episodesEndpoint
          : defaultEndpoint;

      const data = await (await fetch(newEndpoint)).json();
      // setResults(data.results);
      setPage((prev) => {
        return {
          ...prev,
          ...data.info,
          currentPage: newEndpoint,
          currentPageNo: 1,
        };
      });
    }

    getNewData();
  };

  let changeSection = (newSection) => {
    if (newSection === section) return;
    setSection(newSection);
    resetData(newSection);
  };

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

  let cardsMarkup =
    results && section === "characters" ? (
      <CharacterList charactersData={results} />
    ) : results && section === "locations" ? (
      <CardList dataList={results} type="locations" />
    ) : results && section === "episodes" ? (
      <CardList dataList={results} type="episodes" />
    ) : (
      <div className="flex flex-row w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          loading...
        </p>
      </div>
    );

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
      <main className="flex flex-col min-h-screen h-full bg-gray-100 dark:bg-gray-900 max-w-screen-2xl m-auto px-2">
        <SiteSections
          preSelectedSection={section}
          changeSection={changeSection}
        />
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
