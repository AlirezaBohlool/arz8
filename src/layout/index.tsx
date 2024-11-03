// layout.js
import Header from "../components/header";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Outlet /> 
            </main>
        </>
    );
};

export default Layout;
