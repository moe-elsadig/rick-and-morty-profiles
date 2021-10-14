import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GiDeadHead,
  GiHalfDead,
  GiCyborgFace,
  GiHeartBeats,
  GiHearts,
  GiSkullCrack,
  GiPortal,
  GiSpaceship,
} from "react-icons/gi";
import { BiPlanet, BiMoviePlay } from "react-icons/bi";

function EpisodeProfile({ episodeData }) {
  let infoMarkup = episodeData ? (
    <div
      className="flex flex-grow bg-white dark:bg-gray-800 rounded-xl shadow-xl h-72 p-5 items-center"
      data-testid="profile-card-info"
    >
      <ul>
        <li>
          <h2 className="text-xl font-bold truncate max-w-64 sm:max-w-full text-gray-900 dark:text-white">
            <BiMoviePlay className="text-2xl text-blue-400 dark:text-blue-500" />
            {episodeData.name}
          </h2>
        </li>

        <div className="w-full h-0 py-4 mb-4 border-b border-gray-200 dark:border-gray-700" />

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4">
              Aired:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate max-w-64 sm:max-w-full">
              {episodeData.air_date}
            </h2>
          </div>
        </li>
        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4">
              Episode:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate max-w-64 sm:max-w-full">
              {episodeData.episode}
            </h2>
          </div>
        </li>

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4">
              Characters:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate max-w-64 sm:max-w-full">
              {episodeData.characters.length}
            </h2>
          </div>
        </li>
        <div className="w-full h-0 py-4 mb-4 border-b border-gray-200 dark:border-gray-700" />

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4">ID:</label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate max-w-64 sm:max-w-full">
              {episodeData.id}
            </h2>
          </div>
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex flex-row w-full items-center justify-center">
      <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
        loading...
      </p>
    </div>
  );

  let charactersMarkup = episodeData ? (
    episodeData.characters.map((character, index) => (
      <Link
        href={character.replace("https://rickandmortyapi.com/api", "")}
        key={index}
      >
        <button
          className={`w-32 bg-yellow-300 dark:bg-yellow-700 px-5 py-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-semibold text-black dark:text-white`}
        >
          <p className="">
            Character{" "}
            {character.split("https://rickandmortyapi.com/api/character/")}
          </p>
        </button>
      </Link>
    ))
  ) : (
    <div className="flex flex-row w-full items-center justify-center">
      <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
        loading...
      </p>
    </div>
  );

  return (
    <div
      data-testid="episodeProfile-component"
      className="flex flex-col w-full max-w-4xl  items-center justify-center m-2 mt-5 rounded-xl"
    >
      <div className="m-auto flex flex-col md:flex-row w-full md:justify-between md:space-x-10 space-y-10 md:space-y-0">
        {infoMarkup}
      </div>
      <div className="pt-10 m-auto flex flex-col space-y-4">
        <h2 className="m-auto text-lg font-bold text-gray-400 dark:text-gray-500">
          Characters
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {charactersMarkup}
        </div>
      </div>
    </div>
  );
}

export default EpisodeProfile;
