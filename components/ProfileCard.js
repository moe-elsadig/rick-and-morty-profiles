import React from "react";
import Image from "next/image";
import {
  GiDeadHead,
  GiHalfDead,
  GiCyborgFace,
  GiHeartBeats,
  GiHearts,
  GiSkullCrack,
  GiPortal,
} from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";

function ProfileCard({ characterData, index }) {
  let infoMarkup = characterData ? (
    <div className="" data-testid="profile-card-info">
      <h2 className="font-semibold truncate w-44 text-gray-900 dark:text-white">
        {characterData.name}
      </h2>
      <div className="flex items-center text-sm font-medium">
        <BiPlanet className="text-green-400 dark:text-green-500" />
        <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
          {characterData.location?.name}
        </h2>
      </div>
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
        <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
          {characterData.status}
        </h2>
      </div>

      <div className="flex items-center text-sm font-medium">
        <h2 className="text-gray-700 dark:text-gray-300 truncate w-44">
          {characterData.type ? characterData.type : characterData.species}
        </h2>
      </div>
    </div>
  ) : (
    <p className="m-auto text-gray-700 dark:text-gray-300">Loading info...</p>
  );

  //   <ul className="text-sm">
  //   <li>{characterData.id}</li>
  //   <li>{characterData.name}</li>
  //   <li>{characterData.status}</li>
  //   <li>{characterData.species}</li>
  //   <li>{characterData.type}</li>
  //   <li>{characterData.gender}</li>
  //   <li>{characterData.origin?.name}</li>
  //   <li>{characterData.location?.name}</li>
  //   <li>Appearances: {characterData.episode?.length}</li>
  //   <li>{characterData.created}</li>
  // </ul>

  //   <div
  //   data-testid="character-list-component"
  //   className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  // >
  //   {cardsMarkup}
  // </div>

  let imageMarkup = characterData?.image ? (
    <div className="relative h-32 w-32 flex-shrink-0 ">
      <Image
        data-testid={`profile-card-image-${index}`}
        src={characterData.image}
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
    <div
      data-testid="profile-card-component"
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out shadow-sm bg-white dark:bg-gray-800"
    >
      {/* left */}
      {imageMarkup}
      {/* right */}
      {infoMarkup}
    </div>
  );
}

export default ProfileCard;
