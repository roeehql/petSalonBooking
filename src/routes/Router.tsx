import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "components/auth/Auth";
import Reservation from "components/reservation/Reservation";
import MyReservationList from "components/reservation/MyReservationList";
import Loading from "components/atom/Loading";

const Router = () => {
  const onLoader = () => {
    return <Loading />;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} loader={onLoader} />
      <Route
        path="/myReservation"
        element={<MyReservationList />}
        loader={onLoader}
      />
      <Route
        path="/list/:salonName"
        element={<Reservation />}
        loader={onLoader}
      />
      <Route path="/auth" element={<Auth />} loader={onLoader} />
    </Routes>
  );
};

export default Router;
