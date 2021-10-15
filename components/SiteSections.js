import React, { useEffect, useState } from "react";

function SiteSections({ preSelectedSection, changeSection }) {
  const [section, setSection] = useState("characters");

  useEffect(() => {
    if (!preSelectedSection) return;
    selectSection(preSelectedSection);
  }, [preSelectedSection]);

  const selectSection = (newSection) => {
    setSection(newSection);
    changeSection(newSection);
    let newPath =
      newSection === "characters"
        ? "character"
        : newSection === "locations"
        ? "location"
        : "episode";
    window.history.pushState({ page: newPath }, "", `/${newPath}`);
  };

  return (
    <div
      data-testid="siteSections-component"
      className="pt-4 m-auto max-w-2xl h-44 sm:h-44 md:h-56 w-full flex flex-col sm:flex-row items-center justify-around"
    >
      <button
        onClick={() => selectSection("characters")}
        className={`px-5 py-2 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 hover:animate-pulse ${
          section === "characters" &&
          "bg-yellow-400 dark:bg-yellow-600 shadow-lg scale-105 opacity-100 "
        }`}
      >
        <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white">
          Characters
        </p>
      </button>

      <button
        onClick={() => selectSection("locations")}
        className={`px-5 py-2 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 hover:animate-pulse ${
          section === "locations" &&
          "bg-yellow-400 dark:bg-yellow-600 shadow-lg scale-105 opacity-100 "
        }`}
      >
        <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white">
          Locations
        </p>
      </button>

      <button
        onClick={() => selectSection("episodes")}
        className={`px-5 py-2 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 hover:animate-pulse ${
          section === "episodes" &&
          "bg-yellow-400 dark:bg-yellow-600 shadow-lg scale-105 opacity-100 "
        }`}
      >
        <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white">
          Episodes
        </p>
      </button>
    </div>
  );
}

export default SiteSections;
