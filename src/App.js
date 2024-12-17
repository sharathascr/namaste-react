import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
export const App = () => {
  return (
    <BrowserRouter>
      <div className="App-page">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
