import React from "react";
import Header from "./src/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer/Footer";
import StarsCanvas from "./src/components/canvas/StarBackground";

export default function AppLayout() {
  return (
    <main  className=" bg-[#030014]  overflow-x-hidden "
>
    <StarsCanvas/>
      <Header />/
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}