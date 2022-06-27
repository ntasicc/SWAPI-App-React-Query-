import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const fetchUrl = async (url) => {
  const response = await axios(url);
  return response.data;
};
const fetchUrls = async (urls) => {
  const data = await Promise.all(
    urls.map((url) => {
      const newData = fetchUrl(url);
      return newData;
    })
  );
  return data;
};

const useFilms = () => {
  const character = useSelector((state) => state.filmsData.character);

  const { data, isLoading, isFetching, isError, error, isPreviousData } =
    useQuery(["films", character.name], () => fetchUrls(character.urls));

  return { data, isLoading, isFetching, isError, error, isPreviousData };
};

export default useFilms;
