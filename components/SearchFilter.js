import React, { useEffect, useState } from "react";

function SearchFilter({ type, addQuery }) {
  // character variables
  const [characterName, setCharacterName] = useState("");
  const [characterSpecies, setCharacterSpecies] = useState("");
  const [characterType, setCharacterType] = useState("");
  const [characterStatus, setCharacterStatus] = useState("");
  const [characterGender, setCharacterGender] = useState("");

  // location variables
  const [locationName, setLocationName] = useState("");
  const [locationType, setLocationType] = useState("");
  const [locationDimension, setLocationDimension] = useState("");

  // episode variables
  const [EpisodeName, setEpisodeName] = useState("");
  const [EpisodeCode, setEpisodeCode] = useState("");

  useEffect(() => {
    let name = "&name=" + characterName;
    let species = "&species=" + characterSpecies;
    let type = "&type=" + characterType;
    let status = "&status=" + characterStatus;
    let gender = "&gender=" + characterGender;

    if (name || species || type || status || gender) {
      let query = "?page=1" + name + species + type + status + gender;
      addQuery(query);
    }
  }, [
    characterName,
    characterSpecies,
    characterType,
    characterStatus,
    characterGender,
  ]);

  let characterFieldsMarkup =
    type === "characters" ? (
      <div className="px-5 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 border border-gray-300 dark:border-gray-700 flex flex-row flex-wrap items-center justify-center">
        <input
          type="search"
          value={characterName}
          onChange={(e) => {
            setCharacterName(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Name"
        />
        <input
          type="search"
          value={characterSpecies}
          onChange={(e) => {
            setCharacterSpecies(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Species"
        />
        <input
          type="search"
          value={characterType}
          onChange={(e) => {
            setCharacterType(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Type"
        />
        <select
          name="characterStatus"
          id="characterStatus"
          value={characterStatus}
          onChange={(e) => {
            setCharacterStatus(e.target.value);
          }}
          className={`text-lg  bg-gray-100 dark:bg-gray-900 text-center outline-none ${
            characterStatus === ""
              ? "text-gray-400 dark:text-gray-400"
              : "text-yellow-500 dark:text-yellow-400"
          }`}
        >
          <option value="" disabled selected>
            Status
          </option>
          <option value="">All</option>
          <option value="female">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          name="characterGender"
          id="characterGender"
          value={characterGender}
          onChange={(e) => {
            setCharacterGender(e.target.value);
          }}
          className={`text-lg  bg-gray-100 dark:bg-gray-900 text-center outline-none ${
            characterGender === ""
              ? "text-gray-400 dark:text-gray-400"
              : "text-yellow-500 dark:text-yellow-400"
          }`}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    ) : type === "locations" ? (
      <div className="px-5 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 border border-gray-300 dark:border-gray-700 flex flex-row flex-wrap items-center justify-center">
        <input
          type="search"
          value={characterName}
          onChange={(e) => {
            setCharacterName(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Name"
        />
        <input
          type="search"
          value={characterSpecies}
          onChange={(e) => {
            setCharacterSpecies(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Species"
        />
        <input
          type="search"
          value={characterType}
          onChange={(e) => {
            setCharacterType(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Type"
        />
      </div>
    ) : type === "episodes" ? (
      <div className="px-5 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 border border-gray-300 dark:border-gray-700 flex flex-row flex-wrap items-center justify-center">
        <input
          type="search"
          value={characterName}
          onChange={(e) => {
            setCharacterName(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Name"
        />
        <input
          type="search"
          value={characterSpecies}
          onChange={(e) => {
            setCharacterSpecies(e.target.value);
          }}
          className="text-lg text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Species"
        />
      </div>
    ) : (
      ""
    );
  return (
    <div data-testid="searchFilter-component" className="m-auto px-4">
      {characterFieldsMarkup}
    </div>
  );
}

export default SearchFilter;
