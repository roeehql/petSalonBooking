import React from "react";
import Banner from "components/ad/Banner";
const PetSalonList = React.lazy(() => import("components/List/PetSalonList"));

const Home = () => {
  return (
    <div>
      <Banner />
      <PetSalonList />
    </div>
  );
};

export default Home;
