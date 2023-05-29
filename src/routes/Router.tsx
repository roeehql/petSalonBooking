import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../components/auth/Auth";
import PetSalonList from "../components/List/PetSalonList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PetSalonList />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
