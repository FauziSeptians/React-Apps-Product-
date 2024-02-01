import React, { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList.ts";
import Card from "../components/card.tsx";
import { useAtom } from "jotai";
import { DataCart, booleanModalsCart } from "../libs/Statemanagement/DataCart.js";
import ModalsCart from "../components/modalsCart.tsx";
import { useItemToCart } from "../hooks/useItemToCart.ts";

export default function Home() {
  const { dataProducts, isLoading, isError } = useAnimeList();
  const [DataCarts] = useAtom(DataCart);
  const frequency = useItemToCart(DataCarts)
  const [booleanModals, setbooleanModals] = useAtom(booleanModalsCart);

  if (isLoading) {
    return <div>loading....</div>;
  }

  if (isError) {
    return <div>eror</div>;
  }

  console.log(dataProducts);
  console.log(DataCart);
  console.log(DataCarts);
  console.log(DataCarts.length);
  console.log(frequency);
 

  return (
    <>
      <>
        {booleanModals && <ModalsCart data={DataCarts} frequency={frequency}></ModalsCart>}
        <div>INI HOME BROKS</div>
        <div>
          <div className="grid grid-cols-4 gap-3">
            {dataProducts &&
              dataProducts.map((el, index) => {
                return <Card data={el}></Card>;
              })}
          </div>
        </div>
      </>
    </>
  );
}
