import React from "react";
import Image from "next/image";

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
    <div className="flex w-52 h-52 relative flex-shrink-0 shadow-sm m-auto">
      <Image
        data-testid={`profile-card-image-${index}`}
        src={characterData.image}
        layout="fill"
        objectFit="contain"
        className=""
      />
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
      <div data-testid="profile-card-image">{imageMarkup}</div>
      <div data-testid="profile-card-info" className="p-2">
        {cardMarkup}
      </div>
    </div>
  );
}

export default ProfileCard;
