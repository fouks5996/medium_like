import React from "react";
import MoreFromMedium from "../articles/MoreFromMedium";
import WrappedButton from "../atoms/buttons/WrappedButton";
import SearchBar from "../atoms/form/SearchBar";
import UserPicSideBar from "./UserPicSideBar";

function UserSideBar({ userInfo, articleId, userId, show }) {
	return (
		<div className='fixed p-8'>
			<WrappedButton />
			<SearchBar />
			<UserPicSideBar userInfo={userInfo} id={userId} />
			<div className='my-10'>
				<MoreFromMedium articleId={articleId} show={show} />
			</div>
		</div>
	);
}

export default UserSideBar;
