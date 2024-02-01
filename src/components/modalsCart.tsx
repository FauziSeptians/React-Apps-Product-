import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useAtom } from "jotai";
import React from "react";
import { booleanModalsCart } from "../libs/Statemanagement/DataCart";

export default function ModalsCart({ data, frequency }) {
  console.log(data);
  console.log(frequency);
  const [booleanModals, setbooleanModals] = useAtom(booleanModalsCart);

  return (
    <div className="w-[50%] h-[300px] bg-white rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 ">
      <div>
        <div className="flex justify-between">
          <div className="mb-4">CART ITEM</div>
          <div onClick={() => setbooleanModals(false)} className="cursor-pointer">
            X
          </div>
        </div>
        {frequency.map((el, index) => {
          return (
            <div className="flex justify-between">
              <div>- {el[0]}</div>
              <div>qty : {el[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
