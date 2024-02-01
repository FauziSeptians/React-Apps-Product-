import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { DataCart, booleanModalsCart } from "../libs/Statemanagement/DataCart.js";
import { useItemToCart } from "../hooks/useItemToCart.ts";

export default function ButtonCart({ Name, AddToCart }) {
  const setDataCart = useSetAtom(DataCart);
  const [DataCarts] = useAtom(DataCart);
  const [booleanModals, setbooleanModals] = useAtom(booleanModalsCart)

  console.log(DataCarts);
 
  const Addingitem = () => {
    setDataCart((prev) => [...prev, AddToCart])
    setbooleanModals(true);
  }

  return (
    <a
      className="bg-red-200 cursor-pointer p-4 rounded-lg"
      onClick={() => Addingitem(AddToCart)}
    >
      {Name}
    </a>
  );
}
