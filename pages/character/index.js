import CardList from "@/components/CardList";
import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";
import Paginator from "@/components/Paginator";
import SearchFilter from "@/components/SearchFilter";
import SiteSections from "@/components/SiteSections";
import Head from "next/head";
import { useEffect, useState } from "react";

const startingPage = 1;
const defaultEndpoint = "https://rickandmortyapi.com/api/character/?page=1";
const locationsEndpoint = "https://rickandmortyapi.com/api/location/?page=1";
const episodesEndpoint = "https://rickandmortyapi.com/api/episode/?page=1";

export default function Home({ data }) {
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
      let data;
      try {
        data = await (await fetch(currentPage)).json();
      } catch (error) {
        return;
      }
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

      let data;
      try {
        data = await (await fetch(newEndpoint)).json();
      } catch (error) {
        return;
      }
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

  let addQuery = (query) => {
    const url = new URL(currentPage);

    let newEndpoint = url.origin + url.pathname + query;

    setPage((prev) => {
      return {
        ...prev,
        currentPage: newEndpoint,
        currentPageNo: 1,
      };
    });
  };

  let cardsMarkup =
    results && section === "characters" ? (
      <CharacterList charactersData={results} />
    ) : results && section === "locations" ? (
      <CardList dataList={results} type="locations" />
    ) : results && section === "episodes" ? (
      <CardList dataList={results} type="episodes" />
    ) : results?.length || !results ? (
      <div className="flex flex-col flex-grow w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          Nothing found
        </p>
      </div>
    ) : (
      <div className="flex flex-col flex-grow w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          loading...
        </p>
      </div>
    );

  return (
    <div className={`bg-gray-200 dark:bg-gray-700`}>
      <Head>
        <title>Rick & Morty Encyclopedia</title>
        <meta
          name="description"
          content="Rick & Morty Encyclopedia powere by the rickandmortyapi.com API"
        />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen h-full bg-gray-100 dark:bg-gray-900 max-w-screen-2xl m-auto items-start">
        <SiteSections
          preSelectedSection={section}
          changeSection={changeSection}
        />
        <SearchFilter type={section} addQuery={addQuery} />

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
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  // use the online REST API
  let data;
  try {
    data = await (await fetch(defaultEndpoint)).json();
  } catch (error) {
    data = {
      info: {
        count: 0,
        pages: 1,
        next: defaultEndpoint,
        prev: null,
      },
      results: [],
    };
  }

  return {
    props: { data },
  };
}
