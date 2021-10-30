import React from "react";

function PageFooter() {
  return (
    <footer className="border-t bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap items-end">
      <p className="max-w-screen-2xl text-sm text-gray-600 dark:text-gray-400 px-10 pt-10 mx-auto">
        Designed & Developed by{" "}
        <a
          href="https://moeabdalla.com/"
          alt=""
          target="_blank"
          rel="noreferrer"
          className="text-red-600 dark:text-red-400"
        >
          Moe.
        </a>
      </p>

      <p className="max-w-screen-2xl text-sm text-gray-600 dark:text-gray-400 px-10 mx-auto">
        Powered by{" "}
        <a
          href="https://rickandmortyapi.com/"
          alt=""
          target="_blank"
          rel="noreferrer"
          className="text-red-600 dark:text-red-400"
        >
          RickAndMortyApi.com
        </a>
      </p>
    </footer>
  );
}

export default PageFooter;
