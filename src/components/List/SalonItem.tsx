import React from "react";
import { SalonList } from "../../types/ListTypes";

const SalonItem = ({ item }: { item: SalonList }) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.address}</p>
      <p>{item.tel}</p>
      <p>
        {item.canSissorCut && <p>#가위컷</p>}
        {item.canCatCut && <p>#고양이미용</p>}
        {item.hasCctv && <p>#CCTV확인가능</p>}
        {item.hasPickupService && <p>#픽업서비스</p>}
      </p>
      <h4>➡️예약하기</h4>
    </li>
  );
};

export default SalonItem;
