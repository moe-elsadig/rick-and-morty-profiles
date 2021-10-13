import React from "react";
import Image from "next/image";
import { GiDeadHead, GiHalfDead } from "react-icons/gi";

function ProfileCard({ characterData, index }) {
  let cardMarkup = characterData ? (
    <ul className="text-sm">
      <li>{characterData.id}</li>
      <li>{characterData.name}</li>
      <li>{characterData.status}</li>
      <li>{characterData.species}</li>
      <li>{characterData.type}</li>
      <li>{characterData.gender}</li>
      <li>{characterData.origin?.name}</li>
      <li>{characterData.location?.name}</li>
      <li>Appearances: {characterData.episode?.length}</li>
      <li>{characterData.created}</li>
    </ul>
  ) : (
    <p className="m-auto">Loading info...</p>
  );

  let imageMarkup = characterData?.image ? (
    <div className="flex w-52 h-52 relative flex-shrink-0 shadow-sm m-auto ">
      <Image
        data-testid={`profile-card-image-${index}`}
        src={characterData.image}
        layout="fill"
        objectFit="contain"
        className=""
      />
      {characterData?.status === "Dead" && (
        <div className="absolute h-full w-full hover:opacity-10">
          <div className="absolute flex bg-gray-600 opacity-50 h-full w-full items-center"></div>
          <div className="absolute flex h-full w-full items-center">
            <GiDeadHead className="m-auto text-7xl cursor-pointer text-blue-300 flex items-center" />
          </div>
        </div>
      )}
    </div>
  ) : (
    <p className="m-auto" data-testid={`profile-card-image-loading`}>
      Loading image...
    </p>
  );
  return (
    <div
      data-testid="profile-card-component"
      className="flex flex-col shadow-md rounded-md cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out min-h-[300px] w-52 bg-white text-black dark:bg-gray-800 dark:text-green-100"
    >
      <div data-testid="profile-card-image" className="">
        {imageMarkup}
      </div>
      <div data-testid="profile-card-info" className="p-2">
        {cardMarkup}
      </div>
    </div>
  );
}

export default ProfileCard;
