import React, { useContext } from "react";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { AppContextProvider } from "./context/AppContextProvider";
export const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="App-page">
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
};
