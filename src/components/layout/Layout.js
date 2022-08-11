import React from "react";
import CurrentNavbar from "../navigation/CurrentNavbar";

function Layout({ children }) {
	return (
		<div className=' my-0 mx-auto max-w-[1550px]'>
			<CurrentNavbar /> {children}
		</div>
	);
}

export default Layout;
