import React, { useEffect } from "react";
import Navigation from "./menuBar/Navigation";
import Header from "./menuBar/Header";
import Router from "routes/Router";
import Toast from "./atom/Toast";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { removeToast } from "store/toastSlice";

function App() {
  const toasts = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(removeToast());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen h-fit box-border">
      <Header />
      <Router />
      <Navigation />
      {toasts.map((toast) => (
        <Toast toast={toast} />
      ))}
    </div>
  );
}

export default App;
