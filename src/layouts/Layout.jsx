import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Layout.css"; 
import { ThemeProvider } from "../context/ThemeContext";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <ThemeProvider>
                <div className="layout-body">
            <Navbar />
            
                <Sidebar />
                <main className="main-content">
                    {children}
                    <Outlet />
                </main>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
