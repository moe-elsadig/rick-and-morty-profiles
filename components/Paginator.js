import React from "react";

function Paginator({ nextFn, prevFn, currentPage = 1, maxPage }) {
  return (
    <div data-testid="paginator-component" className="grid grid-cols-3 py-5">
      <button
        data-testid="paginator-back"
        onClick={prevFn}
        disabled={currentPage === 1 ? true : false}
        className={`bg-yellow-300 dark:bg-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-600 px-5 py-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-semibold text-black dark:text-white ${
          currentPage === 1 &&
          "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 shadow-none cursor-not-allowed"
        }`}
      >
        <p className="">Back</p>
      </button>
      <div className="font-bold m-auto text-black dark:text-white pb-2 border-b border-blue-300 darker:border-blue-600">
        <p data-testid="paginator-number">{currentPage}</p>
      </div>
      <button
        data-testid="paginator-next"
        onClick={nextFn}
        disabled={currentPage === maxPage ? true : false}
        className={`bg-yellow-300 dark:bg-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-600 px-5 py-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse ${
          currentPage === maxPage &&
          "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 shadow-none cursor-not-allowed"
        }`}
      >
        <p className="font-semibold text-black dark:text-white">Next</p>
      </button>
    </div>
  );
}

export default Paginator;
