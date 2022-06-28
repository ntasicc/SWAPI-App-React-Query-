import CharacterCard from "../Character/CharacterCard/CharacterCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { characterActions } from "../../store/character-slice";
import { swDataActions } from "../../store/swData-slice";
import LoadingSpinner from "../UI/LoadingSpinner";
import { filmsActions } from "../../store/films-slice";
import {
  GridContainer,
  GridItem,
  Paragraph,
} from "./StyledComponents/components";
//import { useQueryClient } from "react-query";

const CardList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterData = props.data || [];
  //const queryClient = useQueryClient();

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
    <GridContainer>
      {cards.length === 0 && props.isFetching && (
        <GridItem>{<LoadingSpinner />}</GridItem>
      )}
      {cards.length > 0 && !props.isLoading
        ? cards
        : !props.fromApi && (
            <Paragraph>
              There are currently no characters. You can add them by clicking on
              the "Add Character" button
            </Paragraph>
          )}
    </GridContainer>
  );
};

export default CardList;
