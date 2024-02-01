import { useQuery } from "react-query";
import { DetailProduct } from "../api/data/Product.ts";

export const useDetailProduct = (id) => {
  console.log(id);
  const {
    data: dataProduct,
    isLoading,
    error,
  } = useQuery({
    queryKey: "dataProduct",
    queryFn: () => DetailProduct(id),
  });

  console.log(dataProduct);
  console.log(isLoading);
  console.log(error);

  return {
    dataProduct,
    isLoading,
    error,
  };
};
