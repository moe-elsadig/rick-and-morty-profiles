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
      className="p-4 flex flex-row flex-wrap items-center justify-evenly space-x-4 space-y-4 bg-[#c7f35c] dark:bg-[#314e1c]"
    >
      {cardsMarkup}
    </div>
  );
}

export default CharacterList;
