import React from "react";
import PetSalonList from "./List/PetSalonList";
import Navigation from "./header/Navigation";
import Header from "./header/Header";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-fit min-h-screen box-border">
      <Header />
      <PetSalonList />
      <Navigation />
    </div>
  );
}

export default App;
