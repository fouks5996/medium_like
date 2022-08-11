import React from "react";
import HomeIcon from "../../svg/HomeIcon";
import NotificationIcon from "../../svg/NotificationIcon";
import BookmarkedIcon from "../../svg/BookmarkedIcon";
import ListIcon from "../../svg/ListIcon";
import WriteIcon from "../../svg/WriteIcon";
import LogoIcon from "../../svg/LogoIcon";
import { Link } from "react-router-dom";

function CurrentNavbar() {
	return (
		<div className='h-screen flex flex-col fixed bg-white min-w-[80px]  justify-center  items-center gap-12   border-gray_light border-r'>
			<Link to='/'>
				<LogoIcon />
			</Link>

			<HomeIcon />
			<NotificationIcon />
			<BookmarkedIcon />
			<ListIcon />
			<WriteIcon />
		</div>
	);
}

export default CurrentNavbar;
