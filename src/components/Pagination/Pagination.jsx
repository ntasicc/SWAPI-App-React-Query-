import { useDispatch, useSelector } from "react-redux";
import CardList from "./CardList";
import { useState } from "react";

const dataLimit = 10;

const Pagination = (props) => {
  const [isFromApi, setIsFromApi] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const dispatch = useDispatch();

  const characterData = useSelector((state) =>
    isFromApi ? state.swData.results : state.swData.customCharacters
  );

  const next = useSelector((state) => state.swData.next);
  const previous = useSelector((state) => state.swData.previous);

  const lastPage = Math.floor(characterData.length / dataLimit);
  const startIndex = currentPageNumber * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;

  const loadNextPageHandler = () => {
    if (isFromApi)
      dispatch({
        type: "FETCH_SWDATA",
        payload: next,
      });
    else setCurrentPageNumber((prevPageNum) => prevPageNum + 1);
  };

  const loadPreviousPageHandler = () => {
    if (isFromApi)
      dispatch({
        type: "FETCH_SWDATA",
        payload: previous,
      });
    else setCurrentPageNumber((prevPageNum) => prevPageNum - 1);
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="self-center mb-10 mt-4">
          <ButtonComponent
            isDisabled={isFromApi ? !previous : !(currentPageNumber > 1)}
            onClick={loadPreviousPageHandler}
          >
            🡰
          </ButtonComponent>
          <button
            className="text-white border-2 border-solid p-2 rounded-md"
            onClick={() => setIsFromApi((prevState) => !prevState)}
          >
            {!isFromApi ? "SWAPI" : "Custom"}
          </button>
          <ButtonComponent
            isDisabled={isFromApi ? !next : !(currentPageNumber <= lastPage)}
            onClick={loadNextPageHandler}
          >
            🡲
          </ButtonComponent>
        </div>

        <CardList
          fromApi={isFromApi}
          openModal={props.openModal}
          filter={props.filter}
          data={
            isFromApi
              ? characterData
              : characterData.slice(startIndex, endIndex)
          }
        ></CardList>
      </div>
    </>
  );
};

const ButtonComponent = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      className="bg-orange-300 w-10 rounded-md mx-10 h-10"
    >
      {props.isDisabled ? "❌" : props.children}
    </button>
  );
};

export default Pagination;
