import { useQuery } from "react-query";
import {ProductList} from "../api/data/Product.ts";

export const useAnimeList = () => {
 
  const {
    data: dataProducts,
    isLoading,
    isError,
  } = useQuery("dataProducts", ProductList);


  return {
    dataProducts,
    isLoading,
    isError,
  };
};
