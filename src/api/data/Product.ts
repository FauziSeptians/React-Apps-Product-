import axios from "axios";

export const ProductList = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");

  return response.data;
};

export const DetailProduct = async (id) => {

  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

  return response.data;
}


