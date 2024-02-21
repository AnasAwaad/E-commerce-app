import React from "react";
import NavBar from "../../components/utility/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/utility/Footer";
const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
