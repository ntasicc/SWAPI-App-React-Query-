import { useInfiniteQuery } from "react-query";
import axios from "axios";

const initialUrl = "https://swapi.dev/api/people/";

const fetchUrl = async (url) => {
  const response = await axios(url);
  return response.data;
};

const useInfinitePeople = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "sw-people",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
      getPreviousPageParam: (lastPage) => lastPage.previous || undefined,
    }
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    isError,
    error,
    isFetchingNextPage,
  };
};

export default useInfinitePeople;
