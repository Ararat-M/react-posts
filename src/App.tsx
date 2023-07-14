import React from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Error from "./pages/Error/Error";

export function App() { 
  return (
    <Layot>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<div>Main</div>}/>
        <Route path={"/about"} element={<About />}/>
        <Route path={"/posts"} element={<Posts/>}/>
        <Route path={"*"} element={<Error />}/>
      </Routes>
    </Layot>
  )
}