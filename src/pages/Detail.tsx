import React from "react";
import { useParams } from "react-router";
import { useDetailProduct } from "../hooks/useDetailProduct.ts";
import Button from "../components/ui/button.tsx";
import ButtonCart from "../components/buttonCart.tsx";
import { useAtom } from "jotai";
import { DataCart } from "../libs/Statemanagement/DataCart";
export default function DetailPage() {
  const { id } = useParams();
  const [DataCarts] = useAtom(DataCart)
  console.log(id);

  const { dataProduct, isLoading, error } = useDetailProduct(id);

  console.log(dataProduct);
  console.log(DataCart);
  console.log(DataCarts)
  console.log(DataCarts.length)

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Detail Page</h1>
      <div className="bg-red-400 h-[500px]">
        <img
          src={dataProduct.image}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="container mx-auto informasi p-4">
        <div className="flex justify-between mb-3">
          <div className="text-[22px]">{dataProduct.title}</div>
          <div>{dataProduct.category}</div>
        </div>
        <div>{dataProduct.description}</div>
      </div>
      <div className="flex gap-3">
        <Button Name={"Back"}></Button>
        <ButtonCart Name={"Add To Cart"} AddToCart={dataProduct}></ButtonCart>
      </div>
    </div>
  );
}
