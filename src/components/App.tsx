import React from "react";
import Navigation from "./header/Navigation";
import Header from "./header/Header";
import Router from "../routes/Router";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen h-fit box-border">
      <Header />
      <Router />
      <Navigation />
    </div>
  );
}

export default App;
