import { useQuery } from "react-query";
import axios from "axios";

const fetchUrl = async (url) => {
  const response = await axios(url);
  return response.data;
};

const usePlanet = (name, url) => {
  const { data, isLoading, isFetching, isError, error, isPreviousData } =
    useQuery(["planet", name], () => fetchUrl(url));

  return { data, isLoading, isFetching, isError, error, isPreviousData };
};

export default usePlanet;
