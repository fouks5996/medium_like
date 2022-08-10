import React from "react";
import { NavLink } from "react-router-dom";

function NavItems({ navLinks }) {
	const activeClassName = "underline font-reg text-sm";
	const defaultClassName = "font-reg text-sm";

	return (
		<div className='flex gap-6 justify-evenly items-center'>
			{navLinks.map(({ href, label }, id) => (
				<NavLink
					key={id}
					className={({ isActive }) =>
						isActive ? activeClassName : defaultClassName
					}
					to={href}>
					{label}
				</NavLink>
			))}
		</div>
	);
}

export default NavItems;
