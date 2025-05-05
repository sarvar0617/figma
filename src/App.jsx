import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
