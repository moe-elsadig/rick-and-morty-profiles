import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiPortal } from "react-icons/gi";
import { BiPlanet, BiMoviePlay } from "react-icons/bi";

function InfoCard({ data, type }) {
  let infoMarkup =
    data && type === "locations" ? (
      <div
        className="flex flex-grow flex-shrink-0 flex-col w-10 max-w-full"
        data-testid="profile-card-info"
      >
        <h2 className="font-semibold truncate text-gray-900 dark:text-white inline-flex items-center pb-2">
          <BiPlanet className="text-blue-400 dark:text-blue-500" />
          {data.name}
        </h2>
        <div className="flex items-center text-sm font-medium">
          <GiPortal className="text-[#5ee021] dark:text-[#61ff18]" />
          <h2 className="text-gray-700 dark:text-gray-300 truncate">
            {data.dimension}
          </h2>
        </div>
        <div className="flex items-center text-sm font-medium">
          <h2 className="text-gray-700 dark:text-gray-300 truncate">
            {data.type}
          </h2>
        </div>
      </div>
    ) : data && type === "episodes" ? (
      <div
        className="flex flex-grow flex-shrink-0 flex-col w-10 max-w-full"
        data-testid="profile-card-info"
      >
        <h2 className="font-semibold truncate text-gray-900 dark:text-white">
          <BiMoviePlay className="text-blue-400 dark:text-blue-500" />
          {data.name}
        </h2>
        <div className="flex items-center text-sm font-medium">
          <h2 className="text-gray-700 dark:text-gray-300 truncate">
            {data.air_date}
          </h2>
        </div>

        <div className="flex items-center text-sm font-medium">
          <h2 className="text-gray-700 dark:text-gray-300 truncate">
            {data.episode}
          </h2>
        </div>
      </div>
    ) : (
      <div className="flex flex-col flex-grow w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          loading...
        </p>
      </div>
    );

  let characterPreviewMarkup =
    data && data.residents ? (
      <div className="grid grid-cols-2 overflow-hidden items-start">
        {data.residents.slice(0, 3).map((resident, index) => (
          <div className="h-10 w-10 border-blue-200 relative" key={index}>
            <Image
              data-testid={`profile-card-image`}
              src={resident.replace("character", "character/avatar") + ".jpeg"}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
              alt=""
            />
          </div>
        ))}
        {data.residents?.length > 3 && (
          <p className="text-gray-300 dark:text-gray-600 font-semibold h-10 w-10 flex items-center justify-center text-sm bg-gray-100 dark:bg-gray-900 rounded-full">
            +{data.residents?.length - 3}
          </p>
        )}
      </div>
    ) : data && data.characters ? (
      <div className="grid grid-cols-2 overflow-hidden items-start">
        {data.characters.slice(0, 3).map((resident, index) => (
          <div className="h-10 w-10 border-blue-200 relative" key={index}>
            <Image
              data-testid={`profile-card-image`}
              src={resident.replace("character", "character/avatar") + ".jpeg"}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
              alt=""
            />
          </div>
        ))}
        {data.characters?.length > 3 && (
          <p className="text-gray-300 dark:text-gray-600 font-semibold h-10 w-10 flex items-center justify-center text-sm bg-gray-100 dark:bg-gray-900 rounded-full">
            +{data.characters?.length - 3}
          </p>
        )}
      </div>
    ) : data?.residents?.length === 0 ? (
      <div className="flex flex-col flex-grow w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          Nothing found
        </p>
      </div>
    ) : (
      <div className="flex flex-row w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          loading...
        </p>
      </div>
    );

  return (
    <Link
      href={`/${type === "locations" ? "location" : "episode"}/${data?.id}`}
      passHref
    >
      <div
        data-testid="infoCard-component"
        className="flex items-between m-2 mt-5 p-4 space-x-4 rounded-xl cursor-pointer hover:shadow-md dark:hover:bg-gray-700 hover:scale-105 transition transform duration-200 ease-out shadow-sm bg-white dark:bg-gray-800"
      >
        {infoMarkup}
        {characterPreviewMarkup}
      </div>
    </Link>
  );
}

export default InfoCard;
