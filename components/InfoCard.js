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
import { BiPlanet } from "react-icons/bi";

function ProfileCard({ data, type, index }) {
  let infoMarkup =
    data && type === "location" ? (
      <div className="" data-testid="profile-card-info">
        <h2 className="font-semibold truncate w-44 text-gray-900 dark:text-white">
          <BiPlanet className="text-blue-400 dark:text-blue-500" />
          {data.name}
        </h2>
        <div className="flex items-center text-sm font-medium">
          <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
            {data.origin.type}
          </h2>
        </div>
        {data.location?.name !== data.origin?.name && (
          <div className="flex items-center text-sm font-medium">
            <GiPortal className="text-[#5ee021] dark:text-[#61ff18]" />
            <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
              {data.dimension}
            </h2>
          </div>
        )}
      </div>
    ) : data && type === "episode" ? (
      <div className="" data-testid="profile-card-info">
        <h2 className="font-semibold truncate w-44 text-gray-900 dark:text-white">
          <BiPlanet className="text-blue-400 dark:text-blue-500" />
          {data.name}
        </h2>
        <div className="flex items-center text-sm font-medium">
          <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
            {data.origin.type}
          </h2>
        </div>
        {data.location?.name !== data.origin?.name && (
          <div className="flex items-center text-sm font-medium">
            <GiPortal className="text-[#5ee021] dark:text-[#61ff18]" />
            <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
              {data.dimension}
            </h2>
          </div>
        )}
      </div>
    ) : (
      <div className="flex flex-row w-full items-center justify-center">
        <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
          loading...
        </p>
      </div>
    );

  let imageMarkup = data?.image ? (
    <div className="relative h-32 w-32 flex-shrink-0 ">
      <Image
        data-testid={`profile-card-image-${index}`}
        src={data.image}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  ) : (
    <p
      className="m-auto text-gray-700 dark:text-gray-300"
      data-testid={`profile-card-image-loading`}
    >
      Loading image...
    </p>
  );

  return (
    <Link href={`/character/${data?.id}`}>
      <div
        data-testid="infoCard-component"
        className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition transform duration-200 ease-out shadow-sm bg-white dark:bg-gray-800"
      >
        {/* left */}
        {imageMarkup}
        {/* right */}
        {infoMarkup}
        <label className="absolute bottom-0 right-0 p-2 rounded-br-xl text-white dark:text-gray-800 hover:text-green-300 dark:hover:text-green-700 cursor-pointer">
          ...more
        </label>
      </div>
    </Link>
  );
}

export default ProfileCard;
