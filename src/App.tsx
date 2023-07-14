import React from "react";
import "./styles.global.css";
import { Layot } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { AppRoute } from "./AppRoute/AppRoute";

export function App() { 
  return (
    <Layot>
      <Navbar />
      <AppRoute />
    </Layot>
  )
}