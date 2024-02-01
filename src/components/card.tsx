import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";


export default function Card({data}) {
  
  return (
    <Link className="border rounded-lg p-3" to={`/datadetail/${data.id}`}>
      <div className="bg-red-200 w-full h-[300px]">
        <img src={data.image} className="object-cover h-full w-full"></img>
      </div>
      <div className="mt-3">
        <div>{data.category}</div>
        <div className="font-bold text-[20px]">{data.title}</div>
      </div>
    </Link>
  );
}
