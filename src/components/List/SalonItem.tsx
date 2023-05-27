import React from "react";
import { SalonList } from "../../types/ListTypes";

const SalonItem = ({ item }: { item: SalonList }) => {
  return (
    <li className="list-none flex flex-col justify-between w-48 m-4 rounded-2xl border-2 border-green-600 shadow cursor-pointer">
      <h3 className="text-2xl w-full pt-4 px-4 mb-2 tracking-tighter">
        {item.name}
      </h3>
      <p className="pl-4 text-base tracking-tighter">{item.address}</p>
      <p className="pl-4 mb-2 text-base tracking-tighter">{item.tel}</p>
      <p className="pl-4 text-base tracking-tighter text-gray-600">
        {item.canSissorCut && <p>#가위컷</p>}
        {item.canCatCut && <p>#고양이미용</p>}
        {item.hasCctv && <p>#CCTV확인가능</p>}
        {item.hasPickupService && <p>#픽업서비스</p>}
      </p>
      <h4 className="w-full p-4 mt-3 text-base tracking-tighter rounded-b-xl bg-green-900 text-white">
        ➡️예약하기
      </h4>
    </li>
  );
};

export default SalonItem;
