import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiPortal } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";

function LocationProfile({ locationData }) {
  let infoMarkup = locationData ? (
    <div
      className="flex flex-grow bg-white dark:bg-gray-800 rounded-xl shadow-xl min-h-72 p-5 "
      data-testid="profile-card-info"
    >
      <ul className="min-w-10 max-w-full">
        <li>
          <h2 className="text-xl font-bold truncate  text-gray-900 dark:text-white">
            <BiPlanet className="text-2xl text-blue-400 dark:text-blue-500" />
            {locationData.name}
          </h2>
        </li>

        <div className="w-full h-0 py-4 mb-4 border-b border-gray-200 dark:border-gray-700" />

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4 truncate">
              Type:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate ">
              {locationData.type}
            </h2>
          </div>
        </li>
        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4 truncate">
              Dimension:
            </label>
            <GiPortal className="text-blue-400 dark:text-blue-500" />
            <h2 className="text-gray-700 dark:text-gray-300 truncate ">
              {locationData.dimension}
            </h2>
          </div>
        </li>

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4 truncate">
              Residents:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate ">
              {locationData.residents?.length}
            </h2>
          </div>
        </li>
        <div className="w-full h-0 py-4 mb-4 border-b border-gray-200 dark:border-gray-700" />

        <li>
          <div className="flex items-center text-base font-medium">
            <label className="text-gray-400 dark:text-gray-500 pr-4 truncate">
              ID:
            </label>
            <h2 className="text-gray-700 dark:text-gray-300 truncate ">
              {locationData.id}
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

  let residentsMarkup = locationData ? (
    locationData.residents.map((resident, index) => (
      <Link
        href={resident.replace("https://rickandmortyapi.com/api", "")}
        key={index}
        passHref
      >
        <button
          className={`truncate bg-yellow-300 dark:bg-yellow-700 px-4 py-2 rounded-2xl shadow-lg hover:scale-105 transition transform duration-200 ease-out hover:animate-pulse font-semibold text-black dark:text-white flex flex-row items-center`}
        >
          <div className="h-10 w-10 border-blue-200 relative">
            <Image
              data-testid={`profile-card-image`}
              src={resident.replace("character", "character/avatar") + ".jpeg"}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
              alt=""
            />
          </div>
          <p className="truncate text-gray-700 dark:text-gray-300  sm:max-w-full text-wrap">
            Resident{" "}
            {resident.split("https://rickandmortyapi.com/api/character/")}
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
      data-testid="locationProfile-component"
      className="flex flex-col w-full max-w-4xl  items-center justify-center m-2 mt-5 rounded-xl"
    >
      <div className="m-auto flex flex-col md:flex-row w-full md:justify-between md:space-x-10 space-y-10 md:space-y-0">
        {infoMarkup}
      </div>
      <div className="pt-10 m-auto flex flex-col space-y-4">
        <h2 className="m-auto text-lg font-bold text-gray-400 dark:text-gray-500">
          Residents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center p-4">
          {residentsMarkup}
        </div>
      </div>
    </div>
  );
}

export default LocationProfile;
