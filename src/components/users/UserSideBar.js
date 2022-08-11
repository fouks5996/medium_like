import React from "react";
import MoreFromMedium from "../articles/MoreFromMedium";
import Button from "../atoms/buttons/Button";
import UserPicSideBar from "./UserPicSideBar";

function UserSideBar({ userInfo, articleId, userId, show }) {
	return (
		<div className='fixed py-8 px-8'>
			<div className='flex items-center gap-5'>
				<Button link='#' text='Get Started' size='text-sm' paddingX='px-20' />
				<p className='text-blueBtn'> Sign in </p>
			</div>

			<div className='my-8 relative'>
				<input
					type='text'
					placeholder='Search'
					className='border w-full border-gray rounded-3xl h-10 pl-10 placeholder:font-reg placeholder:text-sm'
				/>
				<svg
					className='absolute top-2 left-2'
					width='25'
					height='25'
					viewBox='0 0 25 25'
					fill='rgba(29, 34, 37, 1)'>
					<path d='M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z'></path>
				</svg>
			</div>

			<UserPicSideBar userInfo={userInfo} id={userId} />

			<div className='my-10'>
				<MoreFromMedium articleId={articleId} show={show} />
			</div>
		</div>
	);
}

export default UserSideBar;
