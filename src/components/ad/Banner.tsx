import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [showAd, setShowAd] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAd((current) => (current === 3 ? 1 : current + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-48 mt-28 overflow-hidden">
      <div className="flex w-3/4 h-40">
        {showAd === 1 && (
          <Ad
            backgroundColor="bg-sky-300"
            imgUrl="/ad1.jpg"
            salonName="Mills-Ryan"
          />
        )}
        {showAd === 2 && (
          <Ad
            backgroundColor="bg-amber-300"
            imgUrl="/ad2.jpg"
            salonName="Stamm and Sons"
          />
        )}
        {showAd === 3 && (
          <Ad
            backgroundColor="bg-red-300"
            imgUrl="/ad3.jpg"
            salonName="Kirlin Inc"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;

export const Ad = ({
  backgroundColor,
  imgUrl,
  salonName,
}: {
  backgroundColor: string;
  imgUrl: string;
  salonName: string;
}) => {
  return (
    <div
      className={`flex justify-around items-center min-w-fit w-full h-full p-4 rounded ${backgroundColor} text-white font-semibold text-4xl`}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={`/adImg/${imgUrl}`} alt="ad" />
      </div>
      <div className="flex flex-col pl-6">
        <h4 className=" text-xl">{salonName} 입니다.</h4>
        <Link to={`/list/${salonName}`} className=" text-xl">
          ➡️예약하기
        </Link>
      </div>
    </div>
  );
};
