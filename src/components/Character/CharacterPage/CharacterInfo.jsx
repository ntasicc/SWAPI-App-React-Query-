import { useSelector, useDispatch } from "react-redux";
import CharacterInfoDisplay from "./CharacterInfoDisplay";
import PlanetInfo from "./PlanetInfo";
import useSpinner from "../../../hooks/use-spinner";

const CharacterInfo = () => {
  const dispatch = useDispatch();
  const spinner = useSpinner("character");
  const characterData = useSelector((state) => state.character.characterData);
  const characterHomeworld = useSelector((state) => state.character.homeworld);

  const loadPlanetHandler = () => {
    dispatch({ type: "FETCH_PLANET", payload: characterData.homeworld });
  };

  return (
    <div className="flex flex-col">
      <CharacterInfoDisplay
        characterData={characterData}
      ></CharacterInfoDisplay>
      {characterData.fromDB ? (
        characterHomeworld ? (
          <PlanetInfo planet={characterHomeworld} />
        ) : (
          <div className="self-center  mt-10">
            {spinner ? (
              spinner
            ) : (
              <button
                className="animate-bounce text-black font-semibold px-1 py-1 rounded-lg w-28 bg-orange-300 m-auto"
                onClick={loadPlanetHandler}
              >
                Planet
              </button>
            )}
          </div>
        )
      ) : null}
    </div>
  );
};

export default CharacterInfo;
