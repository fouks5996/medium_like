import React from "react";
import { Link } from "react-router-dom";
import ArticleInfo from "../atoms/ArticleInfo";

function UserPicArticle({ articleInfo, userInfo, id }) {
	return (
		<Link to={"/user/" + id}>
			<div className='flex gap-4 items-center'>
				<img
					alt='name'
					className='w-14 h-14 object-cover rounded-full'
					src={"http://localhost:1337" + userInfo.picture.data.attributes.url}
				/>
				<div>
					<h1 className='font-reg '>
						{userInfo.name} {userInfo.familyName}
					</h1>
					<ArticleInfo attributes={articleInfo} size='[0.875rem]' />
				</div>
			</div>
		</Link>
	);
}

export default UserPicArticle;
