import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pagination from "./components/Pagination/Pagination";
import Films from "./components/Films/Films";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import CharacterInfo from "./components/Character/CharacterPage/CharacterInfo";
import NewCharacter from "./components/NewCharacter/NewCharacter";
import Header from "./components/Layout/Header";
import StarWarsCrawl from "./components/UI/StarWarsCrawl";

let initialRender = true;

function App() {
  const [showFilmsModal, setShowFilmsModal] = useState(false);
  const [showAddCharacterModal, setShowAddCharacterModal] = useState(false);
  const [showCrawl, setShowCrawl] = useState(false);

  const [filter, setFilter] = useState({
    name: "",
    gender: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      dispatch({
        type: "FETCH_SWDATA",
        payload: "https://swapi.dev/api/people",
      });
    }
  }, [dispatch]);

  const setFilterHandler = (value) => {
    setFilter(value);
  };

  const closeFilmsModalHandler = () => {
    setShowFilmsModal(false);
    dispatch({
      type: "STOP_FETCHING_FILMS",
    });
  };

  const openFilmsModuleHandler = () => {
    setShowFilmsModal(true);
  };

  const openAddCharacterModalHandler = () => {
    setShowAddCharacterModal(true);
  };

  const closeAddCharacterModalHandler = () => {
    setShowAddCharacterModal(false);
  };

  const showCrawlHandler = () => {
    setShowCrawl((prevState) => !prevState);
  };

  return (
    <>
      <div className="container fixed z-10 max-w-full  top-0">
        <Header
          openAddCharacter={openAddCharacterModalHandler}
          filter={filter}
          setFilter={setFilterHandler}
        ></Header>
      </div>

      {showAddCharacterModal && (
        <NewCharacter onClose={closeAddCharacterModalHandler}></NewCharacter>
      )}

      {showFilmsModal && <Films onClose={closeFilmsModalHandler}></Films>}

      <div className="container max-w-full mt-28">
        <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <button
                    onClick={showCrawlHandler}
                    className="text-white bg-orange-600 py-1 px-3 rounded-full fixed ml-4 mt-4 hover:px-4 hover:py-2 hover:ml-3 hover:mt-3 shadow-md shadow-black hover:cursor-pointer z-50"
                  >
                    ?
                  </button>
                  {!showCrawl ? (
                    <Pagination
                      openModal={openFilmsModuleHandler}
                      filter={filter}
                    ></Pagination>
                  ) : (
                    <StarWarsCrawl />
                  )}
                </>
              }
            ></Route>
            <Route
              path="/character"
              exact
              element={<CharacterInfo></CharacterInfo>}
            ></Route>
            <Route
              path="/add"
              exact
              element={<NewCharacter></NewCharacter>}
            ></Route>
            <Route path="*" exact element={<Navigate to="/meals" />}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
