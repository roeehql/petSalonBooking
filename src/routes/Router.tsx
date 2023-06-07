import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "components/auth/Auth";
import Reservation from "components/reservation/Reservation";
import MyReservationList from "components/reservation/MyReservationList";
import Loading from "components/atom/Loading";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
        loader={() => {
          return <Loading />;
        }}
      />
      <Route
        path="/myReservation"
        element={<MyReservationList />}
        loader={() => {
          return <Loading />;
        }}
      />
      <Route
        path="/list/:salonName"
        element={<Reservation />}
        loader={() => {
          return <Loading />;
        }}
      />
      <Route
        path="/auth"
        element={<Auth />}
        loader={() => {
          return <Loading />;
        }}
      />
    </Routes>
  );
};

export default Router;
