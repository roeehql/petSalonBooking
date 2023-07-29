import React from "react";
import Banner from "components/ad/Banner";
import PetSalonList from "components/List/PetSalonList";

const Home = () => {
  return (
    <div className=" mb-28">
      <Banner />
      <PetSalonList />
    </div>
  );
};

export default Home;
