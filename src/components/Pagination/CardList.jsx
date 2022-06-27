import CharacterCard from "../Character/CharacterCard/CharacterCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { characterActions } from "../../store/character-slice";
import { swDataActions } from "../../store/swData-slice";
import LoadingSpinner from "../UI/LoadingSpinner";
import { filmsActions } from "../../store/films-slice";
import { useQueryClient } from "react-query";

const CardList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterData = props.data || [];
  const queryClient = useQueryClient();

  const loadFilms = (characterName) => {
    const character = characterData.filter((c) => c.name === characterName);
    dispatch(
      filmsActions.addCharacter({
        name: character[0].name,
        urls: character[0].films,
      })
    );
    props.openModal();
  };

  const loadCharacterHandler = (characterData) => {
    const fromDB = props.fromApi ? { fromDB: true } : { fromDB: false };
    dispatch(characterActions.addCharacter({ ...characterData, ...fromDB }));
    navigate("/character");
  };

  const deleteCharacterHandler = (characterID) => {
    // if (fromApi) {
    //   queryClient.setQueryData("sw-people", (old) => {
    //     old.pages[props.currentPage].results.filter(
    //       (c) => c.name !== characterID
    //     );
    //     return old;
    //   });
    // } else
    dispatch(swDataActions.deleteCustomCharacter(characterID));
  };

  const cards = characterData
    .filter(
      (character) =>
        character.name
          .toLowerCase()
          .startsWith(props.filter.name.toLowerCase()) &&
        character.gender
          .toLowerCase()
          .startsWith(props.filter.gender.toLowerCase())
    )
    .map((character, i) => {
      return (
        <CharacterCard
          key={i}
          characterData={character}
          fromApi={props.fromApi}
          loadCharacter={loadCharacterHandler}
          selectFilms={loadFilms}
          deleteCharacter={deleteCharacterHandler}
        ></CharacterCard>
      );
    });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-6 justify-evenly mx-3 mb-4 ">
      {cards.length === 0 && props.isFetching && (
        <div className="col-span-full mt-24 ml-24">{<LoadingSpinner />}</div>
      )}
      {cards.length > 0 && !props.isLoading
        ? cards
        : !props.fromApi && (
            <p className="text-center mt-4 col-span-full text-2xl text-amber-100 italic">
              There are currently no characters. You can add them by clicking on
              the "Add Character" button
            </p>
          )}
    </div>
  );
};

export default CardList;
