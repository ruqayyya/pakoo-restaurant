import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/header";


const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MenuPage />} path="/Menu" />
        <Route element={<ContactPage />} path="/Contact" />
      </Routes>
    </>
  );
};

export default App;
