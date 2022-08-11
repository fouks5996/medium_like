import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../svg/EmailIcon";
import UserButton from "../atoms/buttons/UserButton";

function UserPicSideBar({ userInfo, id }) {
	return (
		<div>
			<img
				alt='user_picture'
				className='w-24 h-24 object-cover rounded-full mb-3 border-gray_light border'
				src={"http://localhost:1337" + userInfo.picture.data.attributes.url}
			/>
			<Link to={"/user/" + id}>
				<h1 className='font-md '>
					{userInfo.name} {userInfo.familyName}
				</h1>
			</Link>

			<p className='font-reg text-sm text-gray mb-3'> {userInfo.bio} </p>

			<div className='flex items-center gap-3'>
				<UserButton text='follow' size='text-sm' paddingX='px-5' />
				<UserButton text={<EmailIcon />} paddingX='px-2' />
			</div>
		</div>
	);
}

export default UserPicSideBar;
