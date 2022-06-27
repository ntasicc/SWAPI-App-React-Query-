import { useSelector } from "react-redux";
import CharacterInfoDisplay from "./CharacterInfoDisplay";
import PlanetInfo from "./PlanetInfo";
import usePlanet from "../../../hooks/use-planet";
import { useState } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";

const CharacterInfo = () => {
  const characterData = useSelector((state) => state.character.characterData);
  const [showPlanet, setShowPlanet] = useState(false);
  const planet = usePlanet(characterData.name, characterData.homeworld);

  return (
    <div className="flex flex-col">
      <CharacterInfoDisplay
        characterData={characterData}
      ></CharacterInfoDisplay>
      {characterData.fromDB ? (
        showPlanet ? (
          planet.isLoading ? (
            <LoadingSpinner />
          ) : (
            <PlanetInfo planet={planet.data} />
          )
        ) : (
          <div className="self-center  mt-10">
            <button
              className="animate-bounce text-black font-semibold px-1 py-1 rounded-lg w-28 bg-orange-300 m-auto"
              onClick={() => setShowPlanet((prevState) => !prevState)}
            >
              Planet
            </button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default CharacterInfo;
