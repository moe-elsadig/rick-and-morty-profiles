import React from "react";
import ProfileCard from "./ProfileCard";

function CharacterList({ charactersData }) {
  let cardsMarkup = charactersData ? (
    charactersData.map((characterData, index) => (
      <ProfileCard
        characterData={characterData}
        index={index}
        key={characterData?.id}
      />
    ))
  ) : (
    <p data-testid="character-list-loading">Loading characters...</p>
  );
  return (
    <div
      data-testid="character-list-component"
      className="grid w-full max-w-7xl m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 dark:bg-gray-900 px-2"
    >
      {cardsMarkup}
    </div>
  );
}

export default CharacterList;
