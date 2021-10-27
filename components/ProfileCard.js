import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiDeadHead, GiHalfDead, GiCyborgFace, GiPortal } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";

function ProfileCard({ characterData, index }) {
  let infoMarkup = characterData ? (
    <div
      className="flex flex-grow flex-col w-10 max-w-full"
      data-testid="profile-card-info"
    >
      <h2 className="font-semibold truncate  text-gray-900 dark:text-white">
        {characterData.name}
      </h2>
      <div className="flex items-center text-sm font-medium">
        <BiPlanet className="text-blue-400 dark:text-blue-500" />
        <h2 className="text-gray-700 dark:text-gray-300 truncate ">
          {characterData.origin?.name}
        </h2>
      </div>
      {characterData.location?.name !== characterData.origin?.name && (
        <div className="flex items-center text-sm font-medium">
          <GiPortal className="text-[#5ee021] dark:text-[#61ff18]" />
          <h2 className="text-gray-700 dark:text-gray-300 truncate ">
            {characterData.location?.name}
          </h2>
        </div>
      )}

      <div className="flex items-center text-sm font-medium">
        {characterData.status === "Alive" && (
          <GiCyborgFace className="text-green-400 dark:text-green-500" />
        )}
        {characterData.status === "Dead" && (
          <GiDeadHead className="text-red-400 dark:text-red-500" />
        )}
        {characterData.status === "unknown" && (
          <GiHalfDead className="text-gray-700 dark:text-gray-300" />
        )}
        <h2 className="text-gray-700 dark:text-gray-300 truncate  ">
          {characterData.status}
        </h2>
      </div>

      <div className="flex items-center text-sm font-medium">
        <h2 className="text-gray-700 dark:text-gray-300 truncate ">
          {characterData.type ? characterData.type : characterData.species}
        </h2>
      </div>
    </div>
  ) : (
    <p className="m-auto text-gray-700 dark:text-gray-300">Loading info...</p>
  );

  let imageMarkup = characterData?.image ? (
    <div className="relative h-32 w-32 flex-shrink-0">
      {characterData.image && (
        <Image
          data-testid={`profile-card-image-${index}`}
          src={characterData.image}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt={`${characterData.name} profile image`}
        />
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

  return (
    <Link href={`/character/${characterData?.id}` + ""} passHref>
      <div
        data-testid="profile-card-component"
        className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:shadow-md dark:hover:bg-gray-700 hover:scale-105 transition transform duration-200 ease-out shadow-sm bg-white dark:bg-gray-800"
      >
        {/* left */}
        {imageMarkup}
        {/* right */}
        {infoMarkup}
      </div>
    </Link>
  );
}

export default ProfileCard;
