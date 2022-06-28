import {
  ButtonContainer,
  MainContainer,
  Span,
  Button,
  MiniContainer,
} from "./StyledComponents/components";

const CharacterCard = (props) => {
  return (
    <>
      <MainContainer>
        <MiniContainer onClick={() => props.loadCharacter(props.characterData)}>
          <p>
            <Span>Name: </Span>
            {props.characterData.name}
          </p>
          <p>
            <Span>Gender: </Span>
            {props.characterData.gender}
          </p>
        </MiniContainer>
        <ButtonContainer align>
          {props.fromApi && (
            <Button onClick={() => props.selectFilms(props.characterData.name)}>
              Films
            </Button>
          )}
          {!props.fromApi ? (
            <Button
              onClick={() => props.deleteCharacter(props.characterData.id)}
            >
              Delete
            </Button>
          ) : null}
        </ButtonContainer>
      </MainContainer>
    </>
  );
};

export default CharacterCard;
