import React, { useEffect, useState } from "react";

function SearchFilter({ type, addQuery = () => {} }) {
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
  const [episodeName, setEpisodeName] = useState("");
  const [episodeCode, setEpisodeCode] = useState("");

  useEffect(() => {
    // character variables
    setCharacterName("");
    setCharacterSpecies("");
    setCharacterType("");
    setCharacterStatus("");
    setCharacterGender("");

    // location variables
    setLocationName("");
    setLocationType("");
    setLocationDimension("");

    // episode variables
    setEpisodeName("");
    setEpisodeCode("");
  }, [type]);

  let characterQuery = () => {
    let name = "&name=" + characterName;
    let species = "&species=" + characterSpecies;
    let type = "&type=" + characterType;
    let status = "&status=" + characterStatus;
    let gender = "&gender=" + characterGender;

    if (name || species || type || status || gender) {
      let query = "?page=1" + name + species + type + status + gender;
      addQuery(query);
    }
  };

  let episodeQuery = () => {
    let name = "&name=" + episodeName;
    let episode = "&episode=" + episodeCode;

    if (name || episode) {
      let query = "?page=1" + name + episode;
      addQuery(query);
    }
  };

  let locationQuery = () => {
    let name = "&name=" + locationName;
    let type = "&type=" + locationType;
    let dimension = "&dimension=" + locationDimension;

    if (name || dimension || type) {
      let query = "?page=1" + name + dimension + type;
      addQuery(query);
    }
  };

  useEffect(() => {
    characterQuery();
  }, [
    characterName,
    characterSpecies,
    characterType,
    characterStatus,
    characterGender,
  ]);

  useEffect(() => {
    locationQuery();
  }, [locationName, locationType, locationDimension]);

  useEffect(() => {
    episodeQuery();
  }, [episodeName, episodeCode]);

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
          <option value="" disabled>
            Status
          </option>
          <option value="">All</option>
          <option value="dead">Dead</option>
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
          <option value="" disabled>
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
          value={locationName}
          onChange={(e) => {
            setLocationName(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Name"
        />
        <input
          type="search"
          value={locationType}
          onChange={(e) => {
            setLocationType(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Type"
        />
        <input
          type="search"
          value={locationDimension}
          onChange={(e) => {
            setLocationDimension(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Dimension"
        />
      </div>
    ) : type === "episodes" ? (
      <div className="px-5 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 border border-gray-300 dark:border-gray-700 flex flex-row flex-wrap items-center justify-center">
        <input
          type="search"
          value={episodeName}
          onChange={(e) => {
            setEpisodeName(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Title"
        />
        <input
          type="search"
          value={episodeCode}
          onChange={(e) => {
            setEpisodeCode(e.target.value);
          }}
          className="text-lg text-yellow-500 dark:text-yellow-400 bg-gray-100 dark:bg-gray-900 text-center outline-none"
          placeholder="Episode"
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
