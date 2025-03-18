import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiDeadHead, GiHalfDead, GiCyborgFace } from "react-icons/gi";

function CharacterProfile({ characterData }) {
  let infoMarkup = characterData ? (
    <div
      className="flex flex-grow bg-white dark:bg-gray-800 rounded-xl shadow-xl min-h-72 p-5 "
      data-testid="profile-card-info"
    >
      <ul className="min-w-10 max-w-full">
        <li>
          <h2 className="truncate text-xl font-bold  sm:max-w-full text-gray-900 dark:text-white">
            {characterData.name}
          </h2>
        </li>

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Species/Type:
            </label>
            <h2 className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full">
              {characterData.species}
              {characterData.type && `/${characterData.type}`}
            </h2>
          </div>
        </li>

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Gender:
            </label>
            <h2 className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full">
              {characterData.gender}
            </h2>
          </div>
        </li>
        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Status:
            </label>
            {characterData.status === "Alive" && (
              <GiCyborgFace className="text-green-400 dark:text-green-500" />
            )}
            {characterData.status === "Dead" && (
              <GiDeadHead className="text-red-400 dark:text-red-500" />
            )}
            {characterData.status === "unknown" && (
              <GiHalfDead className="text-gray-700 dark:text-gray-300" />
            )}
            <h2 className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full ">
              {characterData.status}
            </h2>
          </div>
        </li>
        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Origin:
            </label>
            <Link
              href={
                characterData.origin?.url.replace(
                  "https://rickandmortyapi.com/api",
                  ""
                ) + ""
              }
              passHref
            >
              <button
                className={`truncate bg-yellow-300 dark:bg-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-600 px-4 my-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-medium text-black dark:text-white`}
              >
                <p className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full text-wrap">
                  {characterData.origin?.name}
                </p>
              </button>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Location:
            </label>
            <Link
              href={
                characterData.location?.url.replace(
                  "https://rickandmortyapi.com/api",
                  ""
                ) + ""
              }
              passHref
            >
              <button
                className={`truncate bg-yellow-300 dark:bg-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-600 px-4 my-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-medium text-black dark:text-white`}
              >
                <p className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full text-wrap">
                  {characterData.location?.name}
                </p>
              </button>
            </Link>
          </div>
        </li>

        <div className="w-full h-0 pt-4 mb-4 border-b border-gray-200 dark:border-gray-700" />

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              ID:
            </label>
            <h2 className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full">
              {characterData.id}
            </h2>
          </div>
        </li>

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="truncate text-gray-400 dark:text-gray-500 pr-4">
              Appearances:
            </label>
            <h2 className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full">
              {characterData.episode?.length}
            </h2>
          </div>
        </li>
      </ul>
    </div>
  ) : (
    <p className="truncate m-auto text-gray-700 dark:text-gray-300">
      Loading info...
    </p>
  );

  let imageMarkup = characterData?.image ? (
    <div className="m-auto relative p-5 h-60 w-60 sm:h-72 sm:w-72 flex-shrink-0 shadow-lg bg-transparent">
      {characterData?.image && (
        <Image
          placeholder="blur"
          blurDataURL="/logo.png"
          data-testid={`profile-card-image`}
          alt=""
          src={characterData.image}
          className="rounded-lg"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      )}
    </div>
  ) : (
    <p
      className="m-auto text-gray-700 dark:text-gray-300"
      data-testid={`profile-card-image-loading`}
    >
      Loading image...
    </p>
  );

  let episodesMarkup = characterData
    ? characterData?.episode?.map((episode, index) => (
        <Link
          href={episode.replace("https://rickandmortyapi.com/api", "") + ""}
          key={index}
          passHref
        >
          <button
            className={`truncate w-32 bg-yellow-300 dark:bg-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-600 px-4 py-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-semibold text-black dark:text-white`}
          >
            <p className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full text-wrap">
              Episode{" "}
              {episode.split("https://rickandmortyapi.com/api/episode/")}
            </p>
          </button>
        </Link>
      ))
    : "Loading episodes...";

  return (
    <div
      data-testid="CharacterProfile-component"
      className="flex flex-col w-full max-w-4xl  items-center justify-center m-2 mt-5 rounded-xl"
    >
      <div className="m-auto flex flex-col md:flex-row w-full md:justify-between md:space-x-10 space-y-10 md:space-y-0 relative">
        {/* left */}
        {imageMarkup}
        {/* right */}
        {infoMarkup}
      </div>
      <div className="pt-10 m-auto flex flex-col space-y-4 truncate ">
        <h2 className="truncate m-auto text-lg font-bold text-gray-400 dark:text-gray-500">
          Episodes
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center p-4">
          {episodesMarkup}
        </div>
      </div>
    </div>
  );
}

export default CharacterProfile;
