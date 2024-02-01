import { useAtom } from "jotai";
import { DataCart } from "../libs/Statemanagement/DataCart";
import { ValidatingDataExists } from "../libs/function/validatingFileExists";

export function useItemToCart(data) {
  const frequency = {};

  data.forEach((obj) => {
    const key = obj["title"];
    frequency[key] = (frequency[key] || 0) + 1;
  });

  var DataFrequency = Object.entries(frequency);

  return DataFrequency;
}
