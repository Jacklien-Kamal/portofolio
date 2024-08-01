import React from "react";
import Header from "./src/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Technologies/Footer/Footer";
import StarsCanvas from "./src/components/canvas/StarBackground";

export default function AppLayout() {
  return (
    <>
    <StarsCanvas/>
      <Header />
      <div className="container mx-5 bg-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}