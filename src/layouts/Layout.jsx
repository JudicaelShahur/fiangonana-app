import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
    </>
  );
}
