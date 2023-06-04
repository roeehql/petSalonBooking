import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "components/auth/Auth";
import Reservation from "components/reservation/Reservation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/list/:salonName" element={<Reservation />} />
    </Routes>
  );
};

export default Router;
