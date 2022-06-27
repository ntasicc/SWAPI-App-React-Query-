import { useSelector } from "react-redux";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const useSpinner = (storeSlice) => {
  const isLoading = useSelector((state) =>
    storeSlice === "swData"
      ? state.swData.isLoading
      : storeSlice === "character"
      ? state.character.isLoading
      : state.filmsData.isLoading
  );
  const errorOccurred = useSelector((state) =>
    storeSlice === "swData"
      ? state.swData.errorOccurred
      : storeSlice === "character"
      ? state.character.errorOccurred
      : state.filmsData.errorOccurred
  );

  const displayData = isLoading ? (
    <LoadingSpinner></LoadingSpinner>
  ) : errorOccurred ? (
    <p>Error occurred, please try again later. ☠️</p>
  ) : null;

  return displayData;
};

export default useSpinner;
